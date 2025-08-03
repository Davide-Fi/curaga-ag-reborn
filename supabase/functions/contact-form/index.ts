import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.53.0';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  telegram?: string;
  xAccount?: string;
  message: string;
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Input validation and sanitization
function validateAndSanitizeInput(data: any): ContactFormData {
  // Basic validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    throw new Error('Name is required');
  }
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    throw new Error('Valid email is required');
  }
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    throw new Error('Message is required');
  }

  // Length limits
  if (data.name.length > 100) throw new Error('Name too long');
  if (data.email.length > 254) throw new Error('Email too long');
  if (data.message.length > 2000) throw new Error('Message too long');
  if (data.company && data.company.length > 100) throw new Error('Company name too long');
  if (data.telegram && data.telegram.length > 50) throw new Error('Telegram handle too long');
  if (data.xAccount && data.xAccount.length > 50) throw new Error('X account too long');

  // Sanitize inputs (basic HTML entity encoding)
  const sanitize = (str: string) => str.replace(/[<>&"']/g, (char) => {
    const entities: Record<string, string> = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#x27;' };
    return entities[char] || char;
  });

  return {
    name: sanitize(data.name.trim()),
    email: data.email.trim().toLowerCase(),
    company: data.company ? sanitize(data.company.trim()) : undefined,
    telegram: data.telegram ? sanitize(data.telegram.trim()) : undefined,
    xAccount: data.xAccount ? sanitize(data.xAccount.trim()) : undefined,
    message: sanitize(data.message.trim()),
  };
}

// Rate limiting check
function checkRateLimit(clientIP: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per window

  const key = clientIP;
  const current = rateLimitStore.get(key);

  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(clientIP)) {
      console.log("Rate limit exceeded for IP:", clientIP);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const rawData = await req.json();
    const formData = validateAndSanitizeInput(rawData);
    
    // Secure logging - only log non-sensitive metadata
    console.log("Contact form submission received:", { 
      timestamp: new Date().toISOString(),
      hasName: !!formData.name,
      hasEmail: !!formData.email,
      hasCompany: !!formData.company,
      messageLength: formData.message.length,
      clientIP: clientIP
    });

    // Store form submission in database
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        telegram: formData.telegram || null,
        x_account: formData.xAccount || null,
        message: formData.message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to store submission: ${dbError.message}`);
    }

    console.log("Contact form stored successfully:", submission.id);

    // Send notification email
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["davide@davidefi.com"], // Replace with your email
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        ${formData.telegram ? `<p><strong>Telegram:</strong> ${formData.telegram}</p>` : ''}
        ${formData.xAccount ? `<p><strong>X Account:</strong> ${formData.xAccount}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><small>Submission ID: ${submission.id}</small></p>
        <p><small>Submitted at: ${new Date(submission.created_at).toLocaleString()}</small></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        submissionId: submission.id,
        message: "Form submitted successfully and notification sent!" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in contact-form function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process contact form", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);