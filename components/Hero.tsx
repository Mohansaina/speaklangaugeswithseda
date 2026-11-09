'use client';

import React from 'react';

interface HeroProps {
  onStartCourse: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCourse, onOpenBooking }) => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Direct Layout Representation of Reference Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: Large, Warm Portrait of Coach Seda (Matching Image 1) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="aspect-[4/4.8] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm">
                <img
                  src="/images/seda-portrait.jpg"
                  alt="Coach Seda Oruç"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-3 text-center sm:text-left">
                <p className="text-xs font-semibold text-stone-800">
                  Seda Oruç
                </p>
                <p className="text-[11px] text-stone-500">
                  English • German • Russian • Turkish Coach
                </p>
              </div>
            </div>
          </div>

          {/* Right: Iconic Bold Headline & CTA (Direct Tribute to Reference 1) */}
          <div className="lg:col-span-7 text-center sm:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.05] mb-6">
              Improve Your{' '}
              <span className="text-[#f59e0b] block sm:inline">
                Speaking Skills
              </span>{' '}
              Today
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-stone-700 font-normal leading-relaxed max-w-2xl mb-8">
              It&apos;s Time To Start Speaking Fluent English, German, Russian & Turkish Without Stress Now.
            </p>

            {/* The Reference 1 Dark Button: "START A COURSE" */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
              <button
                onClick={onStartCourse}
                className="w-full sm:w-auto px-9 py-4 rounded-lg bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold text-sm tracking-widest uppercase transition-all shadow-sm active:scale-98 text-center"
              >
                START A COURSE
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-lg border border-stone-300 text-stone-800 hover:bg-stone-50 font-semibold text-sm transition text-center"
              >
                Free 15-Min Placement Call
              </button>
            </div>

            {/* Location & Formats note */}
            <div className="pt-6 border-t border-stone-100 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-6 text-xs text-stone-500 font-medium">
              <span>📍 Baku Studio: <strong>8 Noyabr Metro</strong></span>
              <span>•</span>
              <span>💻 Online Worldwide via Zoom</span>
              <span>•</span>
              <span>👥 Small Groups (Max 4) & 1-on-1 VIP</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
