export type ThemeMode = 'light' | 'dark';

export interface ServiceProgram {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  format: string;
  audience: string;
  outcomes: string[];
  features: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  category: 'all' | 'founders' | 'product' | 'engineering';
  metric: string;
  timeframe: string;
  quote: string;
  detailedCase: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  sprintPrice: number;
  popular?: boolean;
  deliverables: string[];
  idealFor: string;
  ctaText: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
  keyTakeaways: string[];
}

export interface BookingFormData {
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  company: string;
  role: string;
  objective: string;
  programOfInterest: string;
}
