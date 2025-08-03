import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, X } from "lucide-react";

interface ContactFormProps {
  trigger: React.ReactNode;
}

const ContactForm = ({ trigger }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    telegram: "",
    xAccount: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch(`https://djuaphbzoitjqjtlxmxg.supabase.co/functions/v1/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdWFwaGJ6b2l0anFqdGx4bXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMjM4ODUsImV4cCI6MjA2OTc5OTg4NX0.h-owDFfnfENfLNq8mt8gpl5Eq0iJq0HdxDg4-QgUzoI`
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });
      
      // Reset form and close dialog
      setFormData({ name: "", email: "", company: "", telegram: "", xAccount: "", message: "" });
      setIsOpen(false);

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <MessageCircle className="w-6 h-6 text-primary" />
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium">
              Company
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telegram" className="text-sm font-medium">
                Telegram Handle
              </Label>
              <Input
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleInputChange}
                placeholder="@username"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="xAccount" className="text-sm font-medium">
                X Account
              </Label>
              <Input
                id="xAccount"
                name="xAccount"
                value={formData.xAccount}
                onChange={handleInputChange}
                placeholder="@username"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project or how we can help..."
              className="min-h-[120px]"
              required
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;