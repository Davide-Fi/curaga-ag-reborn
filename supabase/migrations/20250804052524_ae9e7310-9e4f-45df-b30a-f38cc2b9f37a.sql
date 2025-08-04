-- Create table for schedule call submissions
CREATE TABLE public.schedule_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  telegram TEXT NOT NULL,
  company TEXT NOT NULL,
  calendar_scheduler TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new'::text,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.schedule_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for schedule submissions
CREATE POLICY "Anyone can submit schedule forms" 
ON public.schedule_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all schedule submissions" 
ON public.schedule_submissions 
FOR SELECT 
USING (true);