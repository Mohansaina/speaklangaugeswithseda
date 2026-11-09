'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSeda } from '@/components/AboutSeda';
import { CoursesSection } from '@/components/CoursesSection';
import { BakuStudio } from '@/components/BakuStudio';
import { PricingSection } from '@/components/PricingSection';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { BookingModal } from '@/components/BookingModal';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { Course } from '@/types';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('Language Lessons');

  const handleOpenBooking = (courseTitle?: string) => {
    if (courseTitle) {
      setSelectedCourseTitle(courseTitle);
    }
    setBookingOpen(true);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourseTitle(`${course.title} (${course.level})`);
    setBookingOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedCourseTitle(`${planName} Plan`);
    setBookingOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white text-stone-900 selection:bg-amber-200 selection:text-amber-950 overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section (Reference Image 1 Homage) */}
      <Hero
        onStartCourse={() => scrollToSection('courses')}
        onOpenBooking={() => handleOpenBooking('Free 15-Minute Level Check with Seda')}
      />

      {/* About Seda (Reference Image 2 Homage: Signature Golden Card + Narrative) */}
      <AboutSeda onBookTrial={() => handleOpenBooking('Free 15-Minute Level Check with Seda')} />

      {/* Language Courses Catalog (Reference Image 2 Bottom Homage) */}
      <CoursesSection onSelectCourse={handleSelectCourse} />

      {/* In-Person Classroom at 8 Noyabr Metro, Baku */}
      <BakuStudio />

      {/* Transparent Tuition & Pricing */}
      <PricingSection onSelectPlan={handleSelectPlan} />

      {/* Verified Student Feedback */}
      <Testimonials />

      {/* Contact & Consultation Booking */}
      <ContactSection />

      {/* Clean Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Universal 1-Click Free Trial Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultCourseTitle={selectedCourseTitle}
      />
    </main>
  );
}
