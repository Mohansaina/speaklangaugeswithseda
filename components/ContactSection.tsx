'use client';

import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    language: 'English',
    mode: 'in-person',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const directWhatsAppUrl = `https://wa.me/994500000000?text=${encodeURIComponent(
    `Hello Seda! My name is ${formData.name || 'a student'}. I want to ask about your ${formData.language} lessons (${formData.mode === 'in-person' ? '8 Noyabr Metro Studio' : 'Online'}).`
  )}`;

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-3">
            Contact & Location
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Reach out directly or visit our classroom in Baku.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#1e293b] rounded-xl p-6 sm:p-8 text-white shadow-xs">
              <h3 className="font-bold text-xl sm:text-2xl mb-3">
                Baku Classroom
              </h3>
              
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                Located right outside <strong>8 Noyabr Metro</strong> station in Baku, Azerbaijan. Air-conditioned, quiet studio designed for focused language immersion.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-stone-300">
                <div>
                  <strong className="text-white block text-[11px] uppercase tracking-wider mb-0.5">Address</strong>
                  <span>8 Noyabr Metro, Nasimi District, Baku</span>
                </div>
                <div>
                  <strong className="text-white block text-[11px] uppercase tracking-wider mb-0.5">Lesson Hours</strong>
                  <span>Monday – Saturday: 09:00 – 20:30</span>
                </div>
                <div>
                  <strong className="text-white block text-[11px] uppercase tracking-wider mb-0.5">Phone / WhatsApp</strong>
                  <span>+994 50 000 00 00</span>
                </div>
                <div>
                  <strong className="text-white block text-[11px] uppercase tracking-wider mb-0.5">Instagram</strong>
                  <span>@seda_oruc_english</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-700">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center justify-center w-full py-3 text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition"
                >
                  Message On WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f8fafc] rounded-xl border border-stone-200 p-6 sm:p-8">
              
              <h3 className="font-bold text-xl sm:text-2xl text-stone-900 mb-1.5">
                Book A 15-Minute Level Check
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 sm:mb-8">
                Leave your contact details and Seda will message you on WhatsApp to confirm your free assessment time.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                  <h4 className="font-bold text-base sm:text-lg text-emerald-900 mb-1">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto mb-4 leading-relaxed">
                    Seda has received your request for {formData.language} lessons. We will contact you via WhatsApp shortly!
                  </p>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-500"
                  >
                    Open WhatsApp Chat Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aysel Mammadova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-base sm:text-sm focus:border-stone-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        WhatsApp / Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+994 (50) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-base sm:text-sm focus:border-stone-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Target Language
                    </label>
                    <select
                      value={formData.language}
                      onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-base sm:text-sm focus:border-stone-900 focus:outline-none"
                    >
                      <option value="English">English (Speaking, IELTS, Business)</option>
                      <option value="German">German / Deutsch (Goethe A1-B1, Relocation)</option>
                      <option value="Russian">Russian / Русский (Everyday Spoken)</option>
                      <option value="Turkish">Turkish / Türkçe (Istanbul Accent)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Learning Format
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, mode: 'in-person' })}
                        className={`min-h-[44px] p-3 rounded-lg border text-xs font-semibold transition text-left flex items-center justify-between ${
                          formData.mode === 'in-person'
                            ? 'bg-[#1e293b] text-white border-[#1e293b]'
                            : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                        }`}
                      >
                        <span>In-Person (8 Noyabr Metro)</span>
                        {formData.mode === 'in-person' && <span>✓</span>}
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, mode: 'online' })}
                        className={`min-h-[44px] p-3 rounded-lg border text-xs font-semibold transition text-left flex items-center justify-between ${
                          formData.mode === 'online'
                            ? 'bg-[#1e293b] text-white border-[#1e293b]'
                            : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                        }`}
                      >
                        <span>Online via Zoom</span>
                        {formData.mode === 'online' && <span>✓</span>}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Message / Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell Seda about your current level and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-base sm:text-sm focus:border-stone-900 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 rounded-lg bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center text-center"
                  >
                    Submit Request
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
