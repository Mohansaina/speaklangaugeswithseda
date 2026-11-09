'use client';

import React, { useState } from 'react';

export const LanguageExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'english' | 'german' | 'russian' | 'turkish'>('english');

  const languages = {
    english: {
      name: 'English',
      flag: '🇬🇧',
      motto: 'Speak with confidence!',
      headline: 'From Silent Translating to Spontaneous Conversational Fluency',
      goal: 'Career advancement, job interviews, international travel, or IELTS 7.5+.',
      challenge: 'Understanding words when listening or reading, but freezing up and mentally translating when it’s your turn to speak.',
      sedaSolution: 'We practice spontaneous reactive dialogues from Day 1. You build conversational muscle memory and stop translating word-for-word in your head.',
      popularPrograms: [
        'Fluent Spoken English (A2 – B2)',
        'IELTS Speaking & Writing (Band 7.0+)',
        'Business & Executive English'
      ]
    },
    german: {
      name: 'Deutsch (German)',
      flag: '🇩🇪',
      motto: 'Lernen mit Freude!',
      headline: 'Master German Grammar Without the Stiffness and Fear',
      goal: 'Goethe-Zertifikat A1–B1, university admission, Ausbildung, or relocation to Germany/Austria.',
      challenge: 'Getting overwhelmed by Der, Die, Das, four cases, and complex German sentence order.',
      sedaSolution: 'Seda breaks down articles using visual suffix rules and sentence mapping. You practice real-world speaking for the Ausländerbehörde, doctor visits, and everyday German life.',
      popularPrograms: [
        'Goethe A1 – B1 Exam Preparation',
        'Conversational German for Relocation',
        'Professional German Basics'
      ]
    },
    russian: {
      name: 'Русский (Russian)',
      flag: '🇷🇺',
      motto: 'Говорите легко!',
      headline: 'Practical, Natural Spoken Russian for Baku & Business',
      goal: 'Confident daily conversation in Baku, business relationships, and effortless fluency.',
      challenge: 'Struggling with case endings, verb prefixes, and feeling hesitant in front of native speakers.',
      sedaSolution: 'We replace dry grammar charts with high-frequency phrase matrices. You learn how native speakers in Baku actually speak today.',
      popularPrograms: [
        'Practical Spoken Russian (Разговорный)',
        'Russian from Zero (A1 Foundation)',
        'Business Russian Communication'
      ]
    },
    turkish: {
      name: 'Türkçe (Turkish)',
      flag: '🇹🇷',
      motto: 'Daha iyi konuşun!',
      headline: 'Melodic Istanbul Turkish with Native Rhythm & Ease',
      goal: 'Flawless communication for university in Turkey, business, travel, and cultural fluency.',
      challenge: 'Understanding Turkish well, but using formal or unnatural phrases when speaking.',
      sedaSolution: 'Focus on natural Istanbul pronunciation, everyday idioms, and conversational cadence so you sound like a native speaker.',
      popularPrograms: [
        'Fluent Spoken Turkish & Accent',
        'Turkish for University (TÖMER)',
        'Conversational Turkish for Expats'
      ]
    }
  };

  const current = languages[activeTab];

  return (
    <section id="languages" className="py-12 sm:py-20 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-amber-800 block mb-2">
            Multilingual Mastery
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight font-serif-display mb-3 sm:mb-4">
            The 4 Languages We Teach
          </h2>
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
            Every language requires a different pedagogical key. Click below to explore how Coach Seda helps you master each one.
          </p>
        </div>

        {/* Language Tabs (Responsive 2x2 grid on mobile, row on desktop) */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {(['english', 'german', 'russian', 'turkish'] as const).map((langKey) => {
            const item = languages[langKey];
            const isActive = activeTab === langKey;
            return (
              <button
                key={langKey}
                onClick={() => setActiveTab(langKey)}
                className={`min-h-[44px] px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 sm:gap-2 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span className="text-base">{item.flag}</span>
                <span className="truncate">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-[#fbf9f5] rounded-2xl border border-stone-200 p-5 sm:p-8 md:p-12 max-w-5xl mx-auto shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-stone-200/80 mb-6 sm:mb-8">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                {current.motto}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 font-serif-display">
                {current.headline}
              </h3>
            </div>
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white border border-stone-300 text-stone-800 self-start md:self-auto shrink-0">
              {current.flag} {current.name} Program
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8 text-xs sm:text-sm">
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5">The Common Struggle</h4>
              <p className="text-stone-600 leading-relaxed">{current.challenge}</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl border border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5">Seda&apos;s Breakthrough Method</h4>
              <p className="text-stone-600 leading-relaxed">{current.sedaSolution}</p>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1">
                Featured Programs
              </span>
              <p className="text-xs sm:text-sm font-semibold text-stone-900">
                {current.popularPrograms.join(' • ')}
              </p>
            </div>

            <a
              href="#courses"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs uppercase tracking-wider transition text-center shrink-0 flex items-center justify-center"
            >
              View {current.name} Courses
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
