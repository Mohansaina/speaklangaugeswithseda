'use client';

import React, { useState } from 'react';
import { COURSES } from '../data/coursesData';
import { Language, Course } from '../types';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('all');

  const filteredCourses = selectedLanguage === 'all'
    ? COURSES
    : COURSES.filter((c) => c.language === selectedLanguage);

  const filterTabs = [
    { id: 'all' as Language, label: 'All Courses' },
    { id: 'english' as Language, label: 'English' },
    { id: 'german' as Language, label: 'German (Deutsch)' },
    { id: 'russian' as Language, label: 'Russian (Русский)' },
    { id: 'turkish' as Language, label: 'Turkish (Türkçe)' },
  ];

  return (
    <section id="courses" className="bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Matching Reference 2 Bottom */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            Language Courses
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Choose your language and start speaking naturally from your very first session.
          </p>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap items-center justify-start sm:justify-center gap-2 mb-10 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedLanguage(tab.id)}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap shrink-0 ${
                selectedLanguage === tab.id
                  ? 'bg-[#1e293b] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid (Matching Reference Clean Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-stone-200 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-400 hover:shadow-md transition"
            >
              <div>
                {/* Header metadata */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    {course.language.toUpperCase()}
                  </span>
                  <span className="text-xs font-medium text-stone-500">
                    {course.level}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-stone-900 mb-2 leading-snug">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {course.tagline}
                </p>

                {/* Features (Clean bullet list) */}
                <ul className="space-y-2 pt-4 border-t border-stone-100 mb-6 text-xs sm:text-sm text-stone-700 list-disc list-inside">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 mb-3 flex justify-between">
                  <span>{course.duration}</span>
                  <span>{course.groupSize}</span>
                </div>
                <button
                  onClick={() => onSelectCourse(course)}
                  className="w-full py-3.5 rounded-lg bg-[#1e293b] hover:bg-[#0f172a] text-white text-xs font-bold uppercase tracking-wider transition text-center"
                >
                  START A COURSE
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
