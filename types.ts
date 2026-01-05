import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Pricing' | 'Security' | 'Usage';
}