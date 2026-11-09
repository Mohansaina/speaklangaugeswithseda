'use client';

import React from 'react';
import { TESTIMONIALS } from '../data/coursesData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            What Students Say
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Feedback from learners who studied English, German, Russian, and Turkish with Seda.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-3">
                  {t.language}
                </span>
                <p className="text-stone-800 text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <div>
                  <strong className="block text-stone-900 text-sm font-semibold">{t.name}</strong>
                  <span>{t.role} • {t.location}</span>
                </div>
                <span className="text-stone-400 font-medium">Verified Student</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
