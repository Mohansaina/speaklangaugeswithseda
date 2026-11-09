export type Language = 'all' | 'english' | 'german' | 'russian' | 'turkish';

export interface Course {
  id: string;
  language: 'english' | 'german' | 'russian' | 'turkish';
  title: string;
  tagline: string;
  level: string;
  duration: string;
  groupSize: string;
  features: string[];
  popular?: boolean;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  language: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface InstagramTip {
  id: string;
  title: string;
  category: string;
  language: string;
  likes: number;
  comments: number;
  preview: string;
}

