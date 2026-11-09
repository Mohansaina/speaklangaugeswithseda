'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How does the 80% Speaking, 20% Theory method work?',
      answer:
        'Instead of spending 45 minutes analyzing dry grammar charts, you learn grammar inductively through real-time conversational scenarios. From your very first lesson, 80% of class time is spent actively speaking, formulating sentences, and receiving instant pronunciation and rhythm corrections from Seda.'
    },
    {
      question: 'Can I study in person at the Baku studio or online?',
      answer:
        'Both options are available. In-person lessons take place right at 8 Noyabr Metro station in Baku, Azerbaijan in a dedicated, comfortable classroom. Online lessons are conducted via Zoom with digital whiteboards and full session recordings.'
    },
    {
      question: 'What if I am an absolute beginner with zero knowledge?',
      answer:
        'We teach absolute beginners (A0/A1) in English, German, Russian, and Turkish. Seda specializes in removing the fear of speaking right away, guiding you through phonetics, essential greetings, and foundational sentence construction in a relaxed, encouraging environment.'
    },
    {
      question: 'How long does it take to prepare for IELTS Band 7+ or Goethe B1?',
      answer:
        'Most students who complete our 8 to 12-week intensive course achieve their target score. Because Seda conducts timed mock interviews and provides feedback on your speaking structure and academic writing, you walk into the exam room fully prepared.'
    },
    {
      question: 'Can I reschedule lessons if my work schedule changes?',
      answer:
        'Yes. Private 1-on-1 students can reschedule lessons with 24 hours prior notice via WhatsApp at no penalty.'
    },
    {
      question: 'What happens during the free 15-minute diagnostic call?',
      answer:
        'You will have a relaxed one-on-one video or audio chat with Seda. She will assess your current speaking comfort level, identify your main speech bottlenecks, and recommend the exact course roadmap tailored to your timeline.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-base">
            Everything you need to know about class schedules, the studio, and enrollment.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border border-stone-200 bg-white overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-stone-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-stone-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct question note */}
        <div className="mt-10 text-center text-sm text-stone-600">
          Have another question? Send a message to Seda on{' '}
          <a
            href="https://wa.me/994500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 font-bold underline hover:text-amber-600"
          >
            WhatsApp
          </a>.
        </div>

      </div>
    </section>
  );
};
