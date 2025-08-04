import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ScheduleCallFormProps {
  trigger: React.ReactNode;
}

interface FormData {
  name: string;
  email: string;
  telegram: string;
  company: string;
  calendar_scheduler: string;
  message: string;
}

const ScheduleCallForm: React.FC<ScheduleCallFormProps> = ({ trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    telegram: "",
    company: "",
    calendar_scheduler: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const requiredFields = Object.entries(formData);
    for (const [key, value] of requiredFields) {
      if (!value.trim()) {
        toast({
          title: "Missing Information",
          description: `Please fill in the ${key.replace('_', ' ')} field.`,
          variant: "destructive",
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('schedule_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Schedule Request Sent!",
        description: "We'll get back to you within 24 hours to schedule your strategy call.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        telegram: "",
        company: "",
        calendar_scheduler: "",
        message: "",
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting schedule request:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-sm border border-border/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
            Schedule Strategy Call
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@company.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="telegram">Telegram Username *</Label>
            <Input
              id="telegram"
              name="telegram"
              type="text"
              value={formData.telegram}
              onChange={handleInputChange}
              placeholder="@yourusername"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="calendar_scheduler">Calendar Scheduler Link *</Label>
            <Input
              id="calendar_scheduler"
              name="calendar_scheduler"
              type="url"
              value={formData.calendar_scheduler}
              onChange={handleInputChange}
              placeholder="https://calendly.com/yourusername or your preferred scheduler"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project, goals, and what you'd like to discuss..."
              className="min-h-[100px]"
              required
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              {isLoading ? "Scheduling..." : "Schedule Call"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleCallForm;