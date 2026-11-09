'use client';

import React from 'react';

export const BakuStudio: React.FC = () => {
  return (
    <section id="studio" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Studio details */}
          <div className="lg:col-span-7 text-left">
            
            <p className="text-xs uppercase tracking-widest font-bold text-amber-700 mb-2">
              In-Person Learning in Baku
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-5">
              Our Classroom at 8 Noyabr Metro
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-6">
              Language learning requires a calm, supportive, and focused atmosphere. Our classroom in Baku is designed as an intimate conversation salon where you speak without fear of making mistakes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 text-xs sm:text-sm">
              <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-1">Strict Cap of 4 Students</h4>
                <p className="text-stone-600 leading-relaxed">
                  Unlike traditional schools with 10–15 students, our groups never exceed 4 learners. You speak for 35 to 45 minutes every single session.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-1">Steps from 8 Noyabr Metro</h4>
                <p className="text-stone-600 leading-relaxed">
                  Located directly at the 8 Noyabr Metro exit in Nasimi district, making commuting fast and convenient from anywhere in Baku.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-1">Tea & Conversation Setting</h4>
                <p className="text-stone-600 leading-relaxed">
                  Enjoy hot tea and coffee around our speaking table. Removing classroom stiffness allows natural conversation reflexes to take over.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-1">Flexible Daytime & Evening Hours</h4>
                <p className="text-stone-600 leading-relaxed">
                  Lessons run from 09:00 to 20:30 Monday through Saturday, accommodating busy work routines and university schedules.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-lg bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold text-xs uppercase tracking-wider transition text-center"
              >
                Visit Studio / Book A Trial
              </a>
              <span className="text-xs text-stone-500 font-medium text-center sm:text-left">
                📍 8 Noyabr Metro, Nasimi District, Baku
              </span>
            </div>

          </div>

          {/* Right: Studio presentation card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 mb-5 border border-stone-200">
                <img
                  src="/images/seda-poster.jpg"
                  alt="Seda Oruç Baku Classroom"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-bold text-xl text-stone-900 mb-1">
                Seda Oruç Language Studio
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                &ldquo;When students walk into our studio, my first priority is to make them feel relaxed. Fluency begins the moment you stop worrying about perfection.&rdquo;
              </p>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <span>Baku, Azerbaijan</span>
                <span className="font-semibold text-emerald-700">Open for Enrollment</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
