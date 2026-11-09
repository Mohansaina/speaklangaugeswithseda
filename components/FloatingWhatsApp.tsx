'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href="https://wa.me/994500000000?text=Hi%20Seda!%20I%20would%20like%20to%20ask%20about%20your%20language%20lessons."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Coach Seda on WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 relative group"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20" />

        {/* Small subtle online dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};
