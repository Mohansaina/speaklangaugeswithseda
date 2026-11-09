'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-amber-400">
                <img
                  src="/images/seda-poster.jpg"
                  alt="Seda Oruç"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-bold text-lg text-white">Seda Oruç</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed mb-4">
              Language Lessons: English, German, Russian, and Turkish. Learn • Speak • Succeed.
            </p>
            <a
              href="https://www.instagram.com/seda_oruc_english/?hl=en#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-white"
            >
              <Instagram className="w-4 h-4" />
              <span>@seda_oruc_english</span>
            </a>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Languages
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#courses" className="hover:text-white transition">English (Speaking & IELTS)</a></li>
              <li><a href="#courses" className="hover:text-white transition">German (Goethe A1-B1)</a></li>
              <li><a href="#courses" className="hover:text-white transition">Russian (Everyday & Business)</a></li>
              <li><a href="#courses" className="hover:text-white transition">Turkish (Istanbul Accent)</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#about" className="hover:text-white transition">About Seda</a></li>
              <li><a href="#courses" className="hover:text-white transition">All Courses</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing & Packages</a></li>
              <li><a href="#method" className="hover:text-white transition">Methodology</a></li>
              <li><a href="#reviews" className="hover:text-white transition">Student Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Studio info */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Baku Classroom
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-2">
              8 Noyabr Metro, Nasimi District, Baku, Azerbaijan.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed">
              In-person VIP private sessions and small group classes (max 4 students).
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Seda Oruç Language Lessons. All rights reserved.</p>
          <p>8 Noyabr Metro, Baku & Online Worldwide</p>
        </div>

      </div>
    </footer>
  );
};
