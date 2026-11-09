'use client';

import React from 'react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: 'Small Group Lessons',
      badge: 'Interactive & Social',
      price: '140 AZN',
      period: '/ month',
      description: 'Ideal for conversational confidence, debates, and peer practice.',
      features: [
        'Maximum 4 students per group for high speaking time',
        '8 sessions per month (60 minutes each)',
        'In-person at 8 Noyabr Metro or Online via Zoom',
        'Weekly speaking challenges and vocabulary packs',
        'Study materials included'
      ],
      popular: false,
      cta: 'START A COURSE'
    },
    {
      name: '1-on-1 VIP Coaching',
      badge: 'Most Popular',
      price: '280 AZN',
      period: '/ month',
      description: 'Dedicated one-on-one coaching customized to your exact pace and career goals.',
      features: [
        'Private one-on-one lessons with Seda Oruç',
        '8 intensive sessions per month (60 minutes each)',
        'Daily 60-second WhatsApp voice note check-ins',
        'Flexible schedule with 24-hour free rescheduling',
        'Custom curriculum for your career or target exams',
        'Personal audio feedback after every lesson'
      ],
      popular: true,
      cta: 'START VIP COACHING'
    },
    {
      name: 'Exam Intensive Sprint',
      badge: 'IELTS / Goethe / Torfl',
      price: '360 AZN',
      period: '/ 6-week sprint',
      description: 'Targeted preparation designed to achieve your required score under timed conditions.',
      features: [
        '12 dedicated 1-on-1 exam prep sessions',
        'Full mock exam simulations (Speaking & Writing)',
        'Detailed score rubric analysis and feedback',
        'High-scoring academic vocabulary templates',
        'Error correction reports after every session'
      ],
      popular: false,
      cta: 'START EXAM SPRINT'
    }
  ];

  return (
    <section id="pricing" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            Pricing & Tuition
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Transparent fees with zero hidden charges. Every package includes a free 15-minute diagnostic session.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition ${
                plan.popular
                  ? 'bg-[#1e293b] text-white shadow-md'
                  : 'bg-white text-stone-900 border border-stone-200 shadow-xs'
              }`}
            >
              <div>
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider inline-block mb-2 sm:mb-3 ${
                    plan.popular ? 'text-amber-400' : 'text-amber-700'
                  }`}
                >
                  {plan.badge}
                </span>

                <h3 className="font-bold text-xl sm:text-2xl mb-1.5">{plan.name}</h3>
                <p className={`text-xs sm:text-sm mb-5 sm:mb-6 ${plan.popular ? 'text-stone-300' : 'text-stone-600'}`}>
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-stone-200 dark:border-stone-800 flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-xs ${plan.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 sm:mb-8 text-xs sm:text-sm list-disc list-inside">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={plan.popular ? 'text-stone-200 leading-relaxed' : 'text-stone-700 leading-relaxed'}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition text-center ${
                    plan.popular
                      ? 'bg-[#f59e0b] hover:bg-[#d97706] text-stone-950'
                      : 'bg-[#1e293b] hover:bg-[#0f172a] text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Studio Guarantee */}
        <div className="mt-10 text-center text-xs text-stone-500">
          In-person lessons at 8 Noyabr Metro, Baku • Online lessons via Zoom • Free 15-minute diagnostic call with Seda
        </div>

      </div>
    </section>
  );
};
