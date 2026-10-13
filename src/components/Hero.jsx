import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, MapPin, Star } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section className="relative pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FFF9F5] via-amber-50/40 to-[#FFF9F5] overflow-hidden">
      {/* Decorative Subtle Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-yellow/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Admissions Open 2026
            </span>
            <span className="inline-flex items-center gap-1 bg-purple-100 text-brand-purple text-xs md:text-sm font-bold px-3.5 py-1 rounded-full border border-purple-200">
              <Star size={13} className="text-amber-500 fill-amber-500" /> Ages 4 to 11 (Phonics & Handwriting)
            </span>
            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-950 text-xs md:text-sm font-bold px-3 py-1 rounded-full border border-amber-200">
              <MapPin size={13} className="text-brand-orange" /> Dombivli (West), Mumbai
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-purple leading-[1.15] mb-5 tracking-tight">
            Unlock Your Child's <br className="hidden sm:inline" />
            <span className="text-brand-orange underline decoration-brand-yellow decoration-wavy underline-offset-4">
              Reading & Speaking
            </span> <br />
            Superpowers! 🚀
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-6 max-w-2xl">
            Comprehensive activity-based phonics & speed handwriting training for children aged 4–11 to build lifelong reading confidence, clear pronunciation, and flawless spelling skills.
          </p>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 w-full max-w-xl">
            <div className="bg-white p-3 rounded-2xl border border-amber-100 shadow-sm flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-base flex-shrink-0">🔤</div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold">Synthetic Phonics</strong>
                <span className="text-slate-500">42+ Letter Sounds</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-amber-100 shadow-sm flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-purple flex items-center justify-center font-bold text-base flex-shrink-0">✍️</div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold">Speed Writing</strong>
                <span className="text-slate-500">Pencil Grip Fix</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-white p-3 rounded-2xl border border-amber-100 shadow-sm flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base flex-shrink-0">👥</div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold">Max 5-6 Kids</strong>
                <span className="text-slate-500">Personal Care</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={() => onOpenEnquiry('General Enquiry')}
              className="btn-primary-orange text-base md:text-lg px-7 py-3.5 w-full sm:w-auto hover:scale-105"
            >
              <Sparkles size={20} />
              <span>Enroll Now / Free Trial</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="https://wa.me/917338255202?text=Hello%20Shama%20ma%27am,%20I%20want%20to%20know%20more%20about%20Phonics%20Ki%20Pathshala."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-green text-base md:text-lg px-7 py-3.5 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Teacher Trust Badge */}
          <div className="mt-8 pt-6 border-t border-amber-200/60 flex items-center gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-amber-400 text-white font-bold flex items-center justify-center border-2 border-white text-xs">A</span>
              <span className="w-8 h-8 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center border-2 border-white text-xs">S</span>
              <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center border-2 border-white text-xs">R</span>
            </div>
            <div>
              <p className="font-bold text-slate-900">Helping children build reading confidence through structured phonics learning.</p>
              <p className="text-slate-500">Taught personally by <strong>Shama Ma'am</strong></p>
            </div>
          </div>
        </div>

        {/* Right Graphic Illustration Column */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src="/assets/hero_illustration.png" 
                alt="Phonics Ki Pathshala Pencil Mascot & Happy Kids Reading" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stat Badges */}
            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3 animate-bounce-mini">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl">⭐</div>
              <div>
                <strong className="block text-sm font-bold text-brand-purple">Guaranteed Results</strong>
                <span className="text-xs text-slate-500">Fluent Reading in 60 Days</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-purple flex items-center justify-center text-xl">📍</div>
              <div>
                <strong className="block text-sm font-bold text-brand-purple">Lodha Heaven</strong>
                <span className="text-xs text-slate-500">Dombivli Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
