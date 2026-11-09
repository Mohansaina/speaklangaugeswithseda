import { Course, Testimonial, InstagramTip } from '../types';

export const COURSES: Course[] = [
  // ENGLISH COURSES
  {
    id: 'eng-speaking-mastery',
    language: 'english',
    title: 'Fluent Spoken English Mastery',
    tagline: 'Break the fear barrier and start expressing your thoughts naturally without translating in your head.',
    level: 'A2 to B2 (Intermediate)',
    duration: '8 - 12 Weeks',
    groupSize: '1-on-1 or Mini Group (max 4)',
    popular: true,
    accentColor: 'from-amber-500 to-orange-500',
    features: [
      'Daily 15-minute voice note check-ins on WhatsApp',
      'Accent softening & natural rhythm drills',
      'Spontaneous debate & real conversation scenarios',
      'Real-world slang, phrasal verbs & idioms'
    ]
  },
  {
    id: 'eng-ielts-booster',
    language: 'english',
    title: 'IELTS / TOEFL Speaking & Writing Booster',
    tagline: 'Targeted strategies to secure Band 7.0+ with mock interviews and personalized feedback.',
    level: 'B1 to C1 (Target Band 7.0+)',
    duration: '6 - 10 Weeks',
    groupSize: '1-on-1 Dedicated Intensive',
    accentColor: 'from-blue-600 to-indigo-600',
    features: [
      'Full Part 1, 2, and 3 mock exam interviews',
      'High-scoring academic vocabulary matrices',
      'Timed fluency and coherence coaching',
      'Writing task analysis & error correction'
    ]
  },
  {
    id: 'eng-business-careers',
    language: 'english',
    title: 'Business English & Global Interview Prep',
    tagline: 'Communicate with executive confidence in multinational meetings, pitches, and high-stakes interviews.',
    level: 'B1 to C2',
    duration: '4 - 8 Weeks',
    groupSize: '1-on-1 Executive',
    accentColor: 'from-emerald-600 to-teal-600',
    features: [
      'Resume & LinkedIn English polish',
      'Pitching, negotiating, and presentation drills',
      'Cross-cultural corporate communication',
      'Industry-specific terminology'
    ]
  },

  // GERMAN COURSES
  {
    id: 'de-goethe-a1-b1',
    language: 'german',
    title: 'German Intensive: Goethe A1 – B1',
    tagline: 'Solid foundational grammar simplified with rapid spoken conversational practice for work or study in Germany.',
    level: 'A1 – B1 (Beginner to Intermediate)',
    duration: '10 - 14 Weeks',
    groupSize: '1-on-1 or Mini Group (3-4)',
    popular: true,
    accentColor: 'from-red-500 to-amber-600',
    features: [
      'Der, Die, Das visual memory hacks',
      'Essential German sentence structure (SVO & V2 rule)',
      'Goethe-Institut & Telc exam simulation',
      'German for everyday life & authorities (Anmeldung, etc.)'
    ]
  },
  {
    id: 'de-conversational-deutsch',
    language: 'german',
    title: 'Conversational Deutsch for Expats & Relocation',
    tagline: 'Overcome the stiffness of German grammar and hold lively everyday conversations with locals.',
    level: 'A2 to B2',
    duration: '8 Weeks',
    groupSize: '1-on-1 Personalized',
    accentColor: 'from-amber-600 to-yellow-600',
    features: [
      'Small talk, shopping, doctor visits & social life',
      'Listening training with authentic podcasts',
      'Accent & pronunciation correction',
      'Grammar shortcuts that native speakers use'
    ]
  },

  // RUSSIAN COURSES
  {
    id: 'ru-conversational-baku',
    language: 'russian',
    title: 'Practical Spoken Russian (Разговорный русский)',
    tagline: 'Master natural Russian for everyday life in Baku, business partnerships, and effortless communication.',
    level: 'All Levels (Beginner to Advanced)',
    duration: '8 - 12 Weeks',
    groupSize: '1-on-1 or Pair Lessons',
    popular: true,
    accentColor: 'from-cyan-600 to-blue-700',
    features: [
      'Eliminate case-ending confusion through dialogue patterns',
      'Everyday spoken idioms and colloquial phrases',
      'Professional business etiquette in Russian',
      'Listening comprehension with modern media'
    ]
  },

  // TURKISH COURSES
  {
    id: 'tr-fluent-turkce',
    language: 'turkish',
    title: 'Fluent Turkish & Istanbul Accent (Akıcı Türkçe)',
    tagline: 'Speak melodic, natural Turkish effortlessly for travel, university, Turkish TV culture, or business.',
    level: 'All Levels (A1 – C1)',
    duration: '6 - 10 Weeks',
    groupSize: '1-on-1 or Mini Group',
    popular: true,
    accentColor: 'from-rose-500 to-red-600',
    features: [
      'Vowel harmony & suffix building simplified',
      'Istanbul Turkish natural pronunciation and rhythm',
      'Everyday idioms, expressions, and cultural nuances',
      'Dizi & Turkish media discussions'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aysel Mammadova',
    role: 'Product Designer',
    location: 'Baku, Azerbaijan',
    language: 'English (IELTS 7.5)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Seda completely transformed my speaking mindset! For years I was paralyzed by grammar mistakes. In just 3 months with her 1-on-1 coaching near 8 Noyabr metro, I got an overall 7.5 on my IELTS speaking!',
    rating: 5
  },
  {
    id: '2',
    name: 'Rashad Aliyev',
    role: 'Software Engineer',
    location: 'Berlin (Relocated from Baku)',
    language: 'German (A1-B1)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'German felt like an impossible mountain of rules until Seda broke it down. Her comparisons between Turkish/Azerbaijani and German sentence structures made everything click so fast. Passed my B1 Goethe exam on first try!',
    rating: 5
  },
  {
    id: '3',
    name: 'Leyla Huseynova',
    role: 'Marketing Specialist',
    location: 'Baku, Azerbaijan',
    language: 'Russian & English',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'Seda is such a warm, encouraging coach. She gives you that comfortable space where you are never afraid of making mistakes. Her daily voice feedback on WhatsApp kept me accountable every single morning.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Keller',
    role: 'Expat & Consultant',
    location: 'Baku, Azerbaijan',
    language: 'Turkish & Russian',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Moving to Baku meant I needed both Russian for business and Turkish for regional travel. Seda teaches with pure passion and immense polyglot knowledge. Truly the best language teacher I have ever worked with!',
    rating: 5
  }
];

export const INSTAGRAM_TIPS: InstagramTip[] = [
  {
    id: 'tip-1',
    title: '5 Native English Phrases That Replace "Very Tired"',
    category: 'Speaking Idioms',
    language: 'English',
    likes: 342,
    comments: 28,
    preview: 'Stop saying "I am very tired". Use "I am exhausted", "I am drained", or "I am spent" depending on the context...'
  },
  {
    id: 'tip-2',
    title: 'German Der, Die, Das: The Secret Suffix Rule',
    category: 'Grammar Shortcut',
    language: 'German',
    likes: 489,
    comments: 44,
    preview: 'Words ending in -ung, -heit, -keit, -schaft, -tät are ALWAYS feminine (Die). Save this reel for your Goethe exam!'
  },
  {
    id: 'tip-3',
    title: 'How to Sound Natural in Russian Without Being Stiff',
    category: 'Fluency Tip',
    language: 'Russian',
    likes: 275,
    comments: 19,
    preview: 'Instead of textbook greetings, learn how native speakers in Baku and abroad actually start casual conversations...'
  },
  {
    id: 'tip-4',
    title: 'The 3 Most Melodic Turkish Words and How to Use Them',
    category: 'Vocabulary',
    language: 'Turkish',
    likes: 512,
    comments: 63,
    preview: 'Discover the untranslatable beauty of "Gönül", "Yakamoz", and "Hüzün" and when to use them in authentic Turkish...'
  }
];

