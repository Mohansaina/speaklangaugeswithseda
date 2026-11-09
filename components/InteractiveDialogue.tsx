'use client';

import React, { useState } from 'react';

interface DialogueExample {
  language: string;
  flag: string;
  scenario: string;
  textbookStiff: string;
  textbookNote: string;
  naturalSpoken: string;
  sedaTip: string;
}

export const InteractiveDialogue: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<number>(0);

  const examples: DialogueExample[] = [
    {
      language: 'English',
      flag: '🇬🇧',
      scenario: 'Declining an invitation after a long workday',
      textbookStiff: '"I am experiencing extreme fatigue and thus cannot accompany you tonight."',
      textbookNote: 'Stiff, unnatural, sounds like a 19th-century grammar textbook.',
      naturalSpoken: '"I\'d love to, but I\'m completely wiped out today. Rain check for Friday?"',
      sedaTip: 'Native speakers use conversational softening ("I\'d love to, but...") and everyday idioms like "wiped out" and "rain check" to sound warm and natural.'
    },
    {
      language: 'German',
      flag: '🇩🇪',
      scenario: 'Ordering quickly at a café or bakery in Berlin',
      textbookStiff: '"Guten Tag, ich hätte gerne das Verlangen, einen Kaffee zu erwerben."',
      textbookNote: 'Overly complex and robotic; locals will immediately switch to English.',
      naturalSpoken: '"Hallo! Einmal Cappuccino bitte, zum Mitnehmen."',
      sedaTip: 'In Germany, short, rhythmic phrases ("Einmal ... bitte, zum Mitnehmen") make you sound like a local within seconds.'
    },
    {
      language: 'Russian',
      flag: '🇷🇺',
      scenario: 'Greeting a business colleague or friend in Baku',
      textbookStiff: '"Здравствуйте, как обстоят ваши текущие дела и обстоятельства?"',
      textbookNote: 'Over-formal, creates an uncomfortable distance in casual conversation.',
      naturalSpoken: '"Привет! Как ты? Давно не виделись, как дела на работе?"',
      sedaTip: 'Russian fluency comes from melodic intonation and natural conversational transitions, not reciting formal case tables.'
    },
    {
      language: 'Turkish',
      flag: '🇹🇷',
      scenario: 'Thanking someone for their hospitality or home-cooked meal',
      textbookStiff: '"Yaptığınız bu yemek için size minnettarlığımı sunarım."',
      textbookNote: 'Grammatically correct, but no native speaker in Istanbul would ever say this.',
      naturalSpoken: '"Ellerine sağlık! Her şey çok lezzetli olmuş."',
      sedaTip: 'Turkish is rich in emotional cultural idioms ("Ellerine sağlık", "Kolay gelsin"). Learning when and how to use them instantly unlocks true fluency.'
    }
  ];

  const current = examples[selectedLang];

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-amber-800 block mb-2">
            The Seda Method in Action
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-serif-display mb-2 sm:mb-3">
            Textbook Stiff vs. Natural Speaking
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
            See the exact difference between memorizing grammar rules and learning how people actually speak in the real world.
          </p>
        </div>

        {/* Mobile-Friendly Language Selector (Smooth horizontal scroll on small devices) */}
        <div className="flex overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap items-center justify-start sm:justify-center gap-2 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {examples.map((item, idx) => (
            <button
              key={item.language}
              onClick={() => setSelectedLang(idx)}
              className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 whitespace-nowrap shrink-0 ${
                selectedLang === idx
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <span>{item.flag}</span>
              <span>{item.language}</span>
            </button>
          ))}
        </div>

        {/* Comparison Card (Optimized padding for mobile screens) */}
        <div className="bg-[#fbf9f5] rounded-2xl border border-stone-200 p-4 sm:p-7 md:p-10 shadow-xs">
          
          <div className="text-left mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-stone-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">Scenario</span>
            <h3 className="text-lg sm:text-2xl font-bold text-stone-900 font-serif-display mt-0.5">
              {current.scenario}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            
            {/* The Textbook Way */}
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-rose-200/80 shadow-2xs">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 mb-2 sm:mb-3">
                ✕ How Textbooks Teach It
              </span>
              <p className="text-stone-800 text-sm sm:text-base font-medium leading-relaxed mb-2 sm:mb-3 italic">
                {current.textbookStiff}
              </p>
              <p className="text-[11px] sm:text-xs text-rose-800/80 leading-relaxed">
                {current.textbookNote}
              </p>
            </div>

            {/* The Natural Way with Seda */}
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-emerald-300 shadow-2xs">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 mb-2 sm:mb-3">
                ✓ How You Learn to Say It with Seda
              </span>
              <p className="text-stone-900 text-sm sm:text-base font-bold leading-relaxed mb-2 sm:mb-3 font-serif-display">
                {current.naturalSpoken}
              </p>
              <p className="text-[11px] sm:text-xs text-emerald-900/80 leading-relaxed">
                {current.sedaTip}
              </p>
            </div>

          </div>

          {/* Coach Insight */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-stone-800 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-amber-900 block font-semibold mb-0.5 text-xs">Seda&apos;s Core Rule:</strong>
              <span className="text-xs sm:text-sm">Fluency isn&apos;t knowing 10,000 words. It&apos;s having automatic reflexes for the everyday words native speakers actually use.</span>
            </div>
            <a
              href="#courses"
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-stone-900 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition shrink-0 flex items-center justify-center text-center"
            >
              Start {current.language} Lessons
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
