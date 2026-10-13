import React from 'react';
import { BookOpen, Mic, SpellCheck, Edit3, Smile, Gamepad2, CheckCircle2 } from 'lucide-react';

export default function CoreBenefits() {
  const benefits = [
    {
      icon: <BookOpen className="w-7 h-7 text-amber-600" />,
      title: 'Strong Reading Foundation',
      desc: 'Mastering 42+ basic & advanced phonics sounds to decode CVC words, blend vowels, and read fluently without hesitation.',
      colorClass: 'border-amber-200 bg-amber-50/50',
    },
    {
      icon: <Mic className="w-7 h-7 text-purple-600" />,
      title: 'Better Pronunciation',
      desc: 'Developing precise articulation for tricky English phonemes (sh, ch, th, ph) so kids speak clearly and articulately.',
      colorClass: 'border-purple-200 bg-purple-50/50',
    },
    {
      icon: <SpellCheck className="w-7 h-7 text-emerald-600" />,
      title: 'Improved Spelling Rules',
      desc: 'Learning syllabification, magic E, and spelling patterns so kids never struggle with exam spellings or dictations.',
      colorClass: 'border-emerald-200 bg-emerald-50/50',
    },
    {
      icon: <Edit3 className="w-7 h-7 text-blue-600" />,
      title: 'Better Handwriting & Speed',
      desc: 'Dynamic pencil grip correction, wrist fine-motor training, and stroke timing to achieve neat, fast writing in school work.',
      colorClass: 'border-blue-200 bg-blue-50/50',
    },
    {
      icon: <Smile className="w-7 h-7 text-rose-600" />,
      title: 'Increased Confidence',
      desc: 'Overcoming reading anxiety so your child stands out as an active, fearless participant in school classroom activities.',
      colorClass: 'border-rose-200 bg-rose-50/50',
    },
    {
      icon: <Gamepad2 className="w-7 h-7 text-indigo-600" />,
      title: 'Interactive Learning',
      desc: 'No monotonous memorization. Multi-sensory activity cards, story reading, and flashcard games make learning fun.',
      colorClass: 'border-indigo-200 bg-indigo-50/50',
    },
  ];

  return (
    <section className="py-16 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 bg-purple-100 text-brand-purple text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            ✨ Comprehensive Skill Development
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-purple leading-tight mb-4">
            6 Core Benefits Your Child <span className="text-brand-orange">Gains at Our Academy</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Every lesson is designed to transform reading struggles into lifelong academic superpowers.
          </p>
        </div>

        {/* 6 Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-3xl border-2 ${b.colorClass} bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100 mb-4">
                {b.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-purple mb-2">
                {b.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {b.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <CheckCircle2 size={14} /> Key Outcome Included
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
