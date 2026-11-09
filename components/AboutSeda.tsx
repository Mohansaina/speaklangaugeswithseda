'use client';

import React from 'react';

interface AboutSedaProps {
  onBookTrial: () => void;
}

export const AboutSeda: React.FC<AboutSedaProps> = ({ onBookTrial }) => {
  return (
    <section id="about" className="bg-white py-14 sm:py-20 lg:py-24 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Layout of Reference Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: The Signature Golden Yellow Card (Image 2) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none rounded-2xl bg-[#eab308] p-6 sm:p-8 text-white shadow-xs">
              
              {/* Photo */}
              <div className="rounded-xl overflow-hidden aspect-[4/4.5] bg-stone-900 mb-6 shadow-2xs border-2 border-white/20">
                <img
                  src="/images/seda-portrait.jpg"
                  alt="Coach Seda Oruç"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* White Text Greeting (Exact Reference 2 Voice) */}
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-2">
                Hi! My name is Seda and welcome to Language Lessons.
              </h3>
              <p className="text-yellow-100 text-sm leading-relaxed">
                Learn • Speak • Succeed. English, German, Russian, and Turkish coaching based in Baku.
              </p>

            </div>
          </div>

          {/* Right: The Conversational Story (Exact Copy of Reference Image 2) */}
          <div className="lg:col-span-7 text-left">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-6">
              I have been teaching languages for over ten years to learners in Baku and around the world. I help learners speak confidently, naturally, and without stress.
            </h2>

            <div className="space-y-5 text-stone-700 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                What would your life be like if you could speak fluent English, German, Russian, or Turkish? Would you have more career options? Would you be able to communicate without stress with millions of other people? Would you be able to understand international media such as radio, TV, and movies?
              </p>

              <p>
                If you want to speak fluent English, German, Russian, or Turkish, but you aren&apos;t sure where to start... If you have been studying grammar for a long time, but you haven&apos;t been improving... If you are tired of going to class and having a teacher talk about grammar rules... If you want to speak confidently and express yourself naturally...
              </p>

              <p className="font-extrabold text-stone-900 text-xl sm:text-2xl text-amber-700">
                You&apos;re in the right place!
              </p>
            </div>

            {/* In-Person Baku Classroom */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 mb-8 text-sm text-stone-700">
              <p className="font-bold text-stone-900 mb-1">
                Baku Classroom (8 Noyabr Metro):
              </p>
              <p className="leading-relaxed">
                In-person lessons are held in our dedicated classroom right at <strong>8 Noyabr Metro</strong> in Baku, Azerbaijan. Every small group is capped at <strong>4 students max</strong> so that everyone speaks for the majority of the class. Online lessons are available worldwide via Zoom.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookTrial}
                className="px-7 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition text-center"
              >
                Schedule A Free 15-Minute Level Check
              </button>
              
              <a
                href="https://www.instagram.com/seda_oruc_english/?hl=en#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg border border-stone-300 text-stone-800 hover:bg-stone-50 font-semibold text-xs uppercase tracking-wider transition text-center"
              >
                Instagram (@seda_oruc_english)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
