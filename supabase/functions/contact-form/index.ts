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
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", { name: formData.name, email: formData.email });

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