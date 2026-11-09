'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseTitle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultCourseTitle = 'Language Lessons',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(defaultCourseTitle);
  const [format, setFormat] = useState('In-Person (8 Noyabr Metro, Baku)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setCourse(defaultCourseTitle);
    setSubmitted(false);
  }, [defaultCourseTitle, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/994500000000?text=${encodeURIComponent(
    `Hello Seda! My name is ${name || 'a student'}. I want to book a free assessment for "${course}" (${format}).`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 flex items-center justify-center transition"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <span className="text-3xl block mb-3">✓</span>
            <h3 className="font-bold text-2xl text-stone-900 mb-2 font-serif-display">
              Request Sent
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
              Thank you, {name}! Seda will contact you on WhatsApp to schedule your 15-minute free placement session.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition"
            >
              Open Chat on WhatsApp Now
            </a>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Free 15-Minute Level Check
              </span>
              <h3 className="font-bold text-2xl text-stone-900 font-serif-display">
                Start A Course With Seda
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Assess your current speaking barrier and choose your learning schedule.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aysel Mammadova"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+994 (50) 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Course / Program
                </label>
                <input
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm bg-stone-50 text-stone-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Location / Format
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-stone-900 focus:outline-none"
                >
                  <option value="In-Person (8 Noyabr Metro, Baku)">In-Person (8 Noyabr Metro, Baku)</option>
                  <option value="Online via Zoom">Online via Zoom</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition"
                >
                  Confirm Free Trial Request
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
