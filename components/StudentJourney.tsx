'use client';

import React from 'react';

export const StudentJourney: React.FC = () => {
  const steps = [
    {
      phase: 'Month 1',
      title: 'Breaking The Silence Barrier',
      subtitle: 'Weeks 1 to 4: Killing the translation reflex',
      description:
        'We eliminate the painful pause where you translate word-for-word in your head. Through fast reactive drills, your mouth begins answering questions spontaneously before your internal editor gets in the way.',
      milestones: [
        'Speak for 5 minutes continuously without freezing',
        'Learn the 50 most common conversational softeners',
        'Stop feeling embarrassed when making minor grammar errors'
      ]
    },
    {
      phase: 'Month 2',
      title: 'Cadence & Natural Phrasing',
      subtitle: 'Weeks 5 to 8: Sounding like a real person',
      description:
        'With daily 60-second WhatsApp audio check-ins, your accent softens and your sentence rhythm flows. You replace stiff textbook expressions with natural idioms and connectors that native speakers use.',
      milestones: [
        'Hold spontaneous conversations on work, news, and daily life',
        'Express opinions and disagreements diplomatically',
        'Understand spoken media and podcasts without subtitles'
      ]
    },
    {
      phase: 'Month 3',
      title: 'Executive Fluency & Exam Mastery',
      subtitle: 'Weeks 9 to 12: Total speaking freedom',
      description:
        'Whether walking into an IELTS Band 7.5+ interview, a Goethe B1 speaking exam, or a corporate job interview, you speak with relaxed authority and zero anxiety.',
      milestones: [
        'Deliver structured presentations and answer follow-up questions',
        'Navigate complex social and professional situations with ease',
        'Natural speech becomes your default instinct'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-[#fbf9f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-800 block mb-2">
            The Learning Curve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight font-serif-display mb-3">
            Your 90-Day Speaking Transformation
          </h2>
          <p className="text-stone-600 text-base">
            What actually happens when you commit to 80% speaking time and daily micro-habits.
          </p>
        </div>

        {/* 3 Step Editorial Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.phase}
              className="bg-white rounded-2xl p-8 border border-stone-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  {step.phase}
                </span>
                <h3 className="text-xl font-bold text-stone-900 mb-1 font-serif-display">
                  {step.title}
                </h3>
                <span className="text-xs text-stone-500 font-medium block mb-4">
                  {step.subtitle}
                </span>

                <p className="text-stone-700 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-stone-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
                    Key Outcomes:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-600 list-disc list-inside">
                    {step.milestones.map((m, mIdx) => (
                      <li key={mIdx} className="leading-relaxed">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] font-semibold text-stone-400">
                Stage {idx + 1} of 3
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-7 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition"
          >
            Start Your 90-Day Journey With Seda
          </a>
        </div>

      </div>
    </section>
  );
};

