// Global type definitions for the application

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  telegram?: string;
  xAccount?: string;
  message: string;
}

export interface IntegrationStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface HeroFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface TechnicalFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string[];
}

export interface ManagementOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  metric: string;
  description: string;
}

export interface BusinessBenefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  metric: string;
  description: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
} 