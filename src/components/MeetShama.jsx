import React from 'react';
import { Award, Heart, Sparkles, UserCheck, Star, BookOpen } from 'lucide-react';

export default function MeetShama({ onOpenEnquiry }) {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-purple-900 via-brand-purple to-purple-950 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Teacher Photograph & Credentials */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-white">
                <img 
                  src="/assets/teacher_shama.png" 
                  alt="Shama Ma'am - Certified Phonics Educator in Dombivli" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Certification Badge */}
              <div className="absolute -top-4 -left-4 bg-white text-brand-purple p-3 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-2.5">
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="block font-bold text-slate-900">Certified Educator</strong>
                  <span className="text-slate-500">Jolly Phonics Specialist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-brand-yellow border border-amber-400/30 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-4">
              <Heart size={14} className="text-red-400 fill-red-400" /> Meet Your Child's Phonics Mentor
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-white">
              Personalized Reading Care by <span className="text-brand-yellow">Shama Ma'am</span>
            </h2>

            <p className="text-purple-100 text-base md:text-lg leading-relaxed mb-6">
              "Welcome to Phonics Ki Pathshala! I believe every child has the potential to become a confident reader and articulate speaker. My goal is to make reading an enjoyable, stress-free daily habit using structured multi-sensory techniques rather than dull memorization."
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-start gap-3">
                <UserCheck className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-base text-white">Small Batch Sizes</h4>
                  <p className="text-xs text-purple-200 mt-0.5">Max 5 to 6 students per batch to ensure individual attention for every child.</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-start gap-3">
                <Star className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-base text-white">Proven Results</h4>
                  <p className="text-xs text-purple-200 mt-0.5">Helping children build reading confidence through structured phonics learning.</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-base text-white">Multi-Sensory Methods</h4>
                  <p className="text-xs text-purple-200 mt-0.5">Interactive flashcards, story cards, speed writing drills, and educational games.</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-start gap-3">
                <Award className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-base text-white">Parent Progress Feedback</h4>
                  <p className="text-xs text-purple-200 mt-0.5">Regular reading audio/video updates and progress tracking reports shared with parents.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => onOpenEnquiry('Consultation with Shama Ma\'am')}
                className="btn-primary-orange text-base px-6 py-3 hover:scale-105"
              >
                <Sparkles size={18} />
                <span>Talk to Shama Ma'am</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
