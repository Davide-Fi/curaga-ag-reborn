// Application configuration and environment variables

export const config = {
  // API Configuration
  api: {
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL || 'https://djuaphbzoitjqjtlxmxg.supabase.co',
    supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdWFwaGJ6b2l0anFqdGx4bXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMjM4ODUsImV4cCI6MjA2OTc5OTg4NX0.h-owDFfnfENfLNq8mt8gpl5Eq0iJq0HdxDg4-QgUzoI',
    contactFormEndpoint: '/functions/v1/contact-form',
    analyticsEndpoint: '/functions/v1/analytics',
  },
  
  // App Configuration
  app: {
    name: 'Curaga',
    description: 'Enterprise DEX Infrastructure Solutions',
    version: '1.0.0',
    contactEmail: 'contact@curaga.com',
  },
  
  // Feature Flags
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableDebugMode: import.meta.env.DEV,
  },
  
  // UI Configuration
  ui: {
    mobileBreakpoint: 768,
    tabletBreakpoint: 1024,
    desktopBreakpoint: 1280,
  },
} as const;

// Type-safe environment variable access
export const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    console.warn(`Environment variable ${key} is not set`);
  }
  return value || '';
}; 