'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, Check, MessageCircle } from 'lucide-react';

interface PlacementQuizProps {
  onBookResult: (courseTitle: string) => void;
}

export const PlacementQuiz: React.FC<PlacementQuizProps> = ({ onBookResult }) => {
  const [step, setStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [selectedChallenge, setSelectedChallenge] = useState<string>('');
  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const restartQuiz = () => {
    setStep(1);
    setSelectedLanguage('English');
    setSelectedChallenge('');
    setSelectedGoal('');
  };

  const getRecommendation = () => {
    if (selectedLanguage === 'English') {
      if (selectedGoal === 'Academic Exam (IELTS/TOEFL)') {
        return {
          title: 'IELTS / TOEFL Speaking & Writing Booster',
          desc: 'Targeted strategies to score Band 7.0+ with mock interviews and personalized feedback.',
          duration: '6 - 10 Weeks'
        };
      }
      if (selectedGoal === 'Job Interview / Career') {
        return {
          title: 'Business English & Global Interview Prep',
          desc: 'Communicate with executive confidence in multinational meetings, pitches, and job interviews.',
          duration: '4 - 8 Weeks'
        };
      }
      return {
        title: 'Fluent Spoken English Mastery',
        desc: 'Break the fear barrier and start expressing your thoughts naturally without translating in your head.',
        duration: '8 - 12 Weeks'
      };
    }

    if (selectedLanguage === 'German') {
      if (selectedGoal === 'Relocation / Visa') {
        return {
          title: 'German Intensive: Goethe A1 – B1',
          desc: 'Solid foundational grammar simplified with rapid spoken conversational practice for work or study in Germany.',
          duration: '10 - 14 Weeks'
        };
      }
      return {
        title: 'Conversational Deutsch for Expats & Daily Life',
        desc: 'Overcome the stiffness of German grammar and hold lively everyday conversations with locals.',
        duration: '8 Weeks'
      };
    }

    if (selectedLanguage === 'Russian') {
      return {
        title: 'Practical Spoken Russian (Разговорный русский)',
        desc: 'Master natural Russian for everyday life in Baku, business partnerships, and effortless communication.',
        duration: '8 - 12 Weeks'
      };
    }

    // Turkish
    return {
      title: 'Fluent Turkish & Istanbul Accent (Akıcı Türkçe)',
      desc: 'Speak melodic, natural Turkish effortlessly for travel, university, Turkish TV culture, or business.',
      duration: '6 - 10 Weeks'
    };
  };

  const recommendation = getRecommendation();

  const whatsappMessage = encodeURIComponent(
    `Hi Seda! I took your website quiz. Language: ${selectedLanguage}, Goal: ${selectedGoal}, Challenge: ${selectedChallenge}. Recommended course: ${recommendation.title}. Can I book my free assessment?`
  );

  return (
    <section id="quiz" className="py-20 md:py-28 bg-gradient-to-b from-[#fafaf9] to-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Interactive Diagnostic
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-3">
            Find Your Ideal Learning Roadmap
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Answer 3 quick questions to discover your personalized coaching plan.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10">
          
          {/* Progress Indicator */}
          {step <= 3 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? 'Target Language' : step === 2 ? 'Your Challenge' : 'Your Goal'}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: Select Language */}
          {step === 1 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Which language do you want to master?
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Select your primary focus area:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { name: 'English', flag: '🇬🇧', sub: 'Fluency, IELTS, Business' },
                  { name: 'German', flag: '🇩🇪', sub: 'Goethe A1-B1, Relocation, Work' },
                  { name: 'Russian', flag: '🇷🇺', sub: 'Conversational, Baku Daily Life' },
                  { name: 'Turkish', flag: '🇹🇷', sub: 'Istanbul Accent, Natural Flow' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedLanguage(item.name)}
                    className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      selectedLanguage === item.name
                        ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/20'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.flag}</span>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                        <div className="text-xs text-slate-500">{item.sub}</div>
                      </div>
                    </div>
                    {selectedLanguage === item.name && (
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition flex items-center justify-center gap-2"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          )}

          {/* STEP 2: Main Challenge */}
          {step === 2 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                What is your biggest obstacle when speaking?
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Be honest—this helps us customize your drills:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'I understand well, but I freeze and translate in my head before speaking',
                  'I know grammar rules, but my vocabulary is limited and stiff',
                  'I lack regular practice and lose confidence in real conversations',
                  'I am starting from absolute scratch (Beginner A1)'
                ].map((challenge) => (
                  <button
                    key={challenge}
                    onClick={() => setSelectedChallenge(challenge)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      selectedChallenge === challenge
                        ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/20'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-sm font-medium text-slate-800">{challenge}</span>
                    {selectedChallenge === challenge && (
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs shrink-0 ml-2">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  disabled={!selectedChallenge}
                  onClick={() => setStep(3)}
                  className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-semibold text-sm transition flex items-center gap-2"
                >
                  <span>Continue to Step 3</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Goal */}
          {step === 3 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                What is your #1 goal right now?
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Tell us where you want this language to take you:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Fluent Everyday Speaking & Self-Confidence',
                  'Job Interview / Career & Promotion',
                  'Academic Exam (IELTS/TOEFL)',
                  'Relocation / Visa & Moving to Another Country',
                ].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      selectedGoal === goal
                        ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/20'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-sm font-medium text-slate-800">{goal}</span>
                    {selectedGoal === goal && (
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs shrink-0 ml-2">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  disabled={!selectedGoal}
                  onClick={() => setStep(4)}
                  className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-semibold text-sm transition flex items-center gap-2 shadow-md"
                >
                  <span>See My Recommendation</span>
                  <Sparkles className="w-4 h-4 text-amber-100" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Results */}
          {step === 4 && (
            <div className="text-center py-4">
              <span className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center mb-4">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                Your Tailored Match
              </span>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-3">
                {recommendation.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
                {recommendation.desc}
              </p>

              <div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-3 text-xs sm:text-sm text-slate-700 mb-8">
                <span>🎯 Target: <strong>{selectedLanguage}</strong></span>
                <span>•</span>
                <span>⏳ Duration: <strong>{recommendation.duration}</strong></span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                
                {/* Book on site */}
                <button
                  onClick={() => onBookResult(recommendation.title)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition shadow-sm"
                >
                  Book Free 15-Min Assessment Call
                </button>

                {/* Send prefilled WhatsApp */}
                <a
                  href={`https://wa.me/994500000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Results to Seda via WhatsApp</span>
                </a>

                {/* Retake */}
                <button
                  onClick={restartQuiz}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

