'use client';

import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (courseTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Language Courses', href: '#courses' },
    { label: 'About Seda', href: '#about' },
    { label: 'Baku Studio', href: '#studio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs py-3'
            : 'bg-white border-b border-stone-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Brand Name (Matching Reference 1 Clean Branding) */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 bg-amber-50 shrink-0">
                <img
                  src="/images/seda-portrait.jpg"
                  alt="Seda Oruç"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="block font-bold text-lg sm:text-xl tracking-tight text-stone-900 leading-tight">
                  Seda Oruç
                </span>
                <span className="block text-[11px] font-medium text-stone-500 tracking-wide">
                  Language Lessons • Baku
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-stone-700 hover:text-stone-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Side Direct Contact & Action */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://www.instagram.com/seda_oruc_english/?hl=en#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition"
                title="@seda_oruc_english"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/994500000000?text=Hi%20Seda!%20I%20would%20like%20to%20learn%20more%20about%20your%20language%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition border border-emerald-200"
              >
                WhatsApp
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition active:scale-95 shadow-xs"
              >
                Start A Course
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold"
              >
                Start
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 transition"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-xl p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400">
                    <img src="/images/seda-portrait.jpg" alt="Seda Oruç" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block leading-tight">Seda Oruç</span>
                    <span className="text-[11px] text-stone-500">Language Lessons</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-stone-700 hover:bg-stone-50 font-medium text-sm transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider transition text-center"
              >
                Start A Course
              </button>
              <a
                href="https://wa.me/994500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 font-medium text-xs text-center transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
