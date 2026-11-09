'use client';

import React from 'react';
import { INSTAGRAM_TIPS } from '../data/coursesData';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

export const InstagramShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Profile Snapshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-50 text-pink-700 border border-pink-200 mb-3">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              Daily Free Micro-Lessons
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Learn Daily with Seda on Instagram
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Free speaking tips, grammar shortcuts, and vocabulary reels posted every week.
            </p>
          </div>

          {/* Instagram Profile Badge */}
          <a
            href="https://www.instagram.com/seda_oruc_english/?hl=en#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 border border-pink-200/80 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-slate-900 text-sm">
                SO
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <span>@seda_oruc_english</span>
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                <span><strong>144</strong> posts</span>
                <span>•</span>
                <span><strong>511+</strong> learners</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition-colors ml-2" />
          </a>

        </div>

        {/* Instagram Reels / Carousel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between hover:bg-white hover:border-pink-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-white text-slate-700 border border-slate-200 shadow-xs">
                    {tip.language}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                    {tip.category}
                  </span>
                </div>

                <h4 className="font-bold text-base text-slate-900 group-hover:text-pink-600 transition-colors mb-3 leading-snug">
                  {tip.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {tip.preview}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    {tip.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                    {tip.comments}
                  </span>
                </div>
                <a
                  href="https://www.instagram.com/seda_oruc_english/?hl=en#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-600 hover:text-pink-700 text-xs inline-flex items-center gap-0.5"
                >
                  <span>Watch</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/seda_oruc_english/?hl=en#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Seda on Instagram for New Tips Every Week</span>
          </a>
        </div>

      </div>
    </section>
  );
};

