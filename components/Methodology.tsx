'use client';

import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section id="method" className="py-20 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
            How The Lessons Work
          </h2>
          <p className="text-stone-600 text-base">
            A practical, speaking-first methodology that removes the fear of making mistakes.
          </p>
        </div>

        {/* Clean Editorial 4-Pillar Grid (Zero AI Slop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
            <span className="text-2xl font-bold text-amber-600 block mb-3">01</span>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              80% Speaking, 20% Theory
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              You speak the target language from the first lesson. Grammar is taught through live conversations rather than textbook memorization.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
            <span className="text-2xl font-bold text-amber-600 block mb-3">02</span>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Polyglot Comparison
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Because Seda teaches English, German, Russian, and Turkish, she explains sentence patterns using analogies from languages you already know.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
            <span className="text-2xl font-bold text-amber-600 block mb-3">03</span>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Daily WhatsApp Voice Checks
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Send a 60-second voice note between classes. Seda reviews your pronunciation, vocabulary choice, and natural speaking rhythm.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
            <span className="text-2xl font-bold text-amber-600 block mb-3">04</span>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Baku Studio & Online
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Join in-person classes right at 8 Noyabr Metro in Baku, or take interactive one-on-one video lessons from anywhere in the world.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
