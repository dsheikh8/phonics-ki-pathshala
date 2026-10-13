import React from 'react';
import { BookOpen, Mic, SpellCheck, Edit3, Smile, Users, Heart, CheckCircle2 } from 'lucide-react';

export default function WhyParentsChooseSection() {
  const choices = [
    {
      icon: <BookOpen className="w-7 h-7 text-brand-orange" />,
      title: 'Strong Reading Foundation',
      badge: 'Synthetic Phonics',
      desc: 'Mastering 42+ letter sounds and blending techniques so children decode unfamiliar words independently.',
      bgColor: 'bg-amber-50/60',
      borderColor: 'border-amber-200',
    },
    {
      icon: <Mic className="w-7 h-7 text-brand-purple" />,
      title: 'Better Pronunciation & Speaking Skills',
      badge: 'Speech Clarity',
      desc: 'Developing clear articulation and phoneme fluency to build fearless spoken English confidence.',
      bgColor: 'bg-purple-50/60',
      borderColor: 'border-purple-200',
    },
    {
      icon: <SpellCheck className="w-7 h-7 text-emerald-600" />,
      title: 'Improved Spelling & Vocabulary',
      badge: 'Spelling Rules',
      desc: 'Understanding syllable breakdown and phonics rules so kids spell complex multi-syllable words accurately.',
      bgColor: 'bg-emerald-50/60',
      borderColor: 'border-emerald-200',
    },
    {
      icon: <Edit3 className="w-7 h-7 text-blue-600" />,
      title: 'Better Handwriting Habits',
      badge: 'Pencil Grip Fix',
      desc: 'Correcting tripod grip, letter formation, and stroke timing for neat, fast handwriting in school.',
      bgColor: 'bg-blue-50/60',
      borderColor: 'border-blue-200',
    },
    {
      icon: <Smile className="w-7 h-7 text-rose-600" />,
      title: 'Increased Confidence in School',
      badge: 'Fearless Readers',
      desc: 'Overcoming reading anxiety so your child actively participates in classroom story reading and school activities.',
      bgColor: 'bg-rose-50/60',
      borderColor: 'border-rose-200',
    },
    {
      icon: <Users className="w-7 h-7 text-amber-700" />,
      title: 'Small Batch Personalized Attention',
      badge: 'Max 5–6 Kids',
      desc: 'Strictly limited to 5–6 students per batch to ensure Shama Ma\'am provides dedicated 1-on-1 focus to every child.',
      bgColor: 'bg-amber-50/60',
      borderColor: 'border-amber-200',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            <Heart size={14} className="text-brand-orange fill-brand-orange" /> Parent Trust & Quality Learning
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-purple leading-tight mb-4">
            Why Parents Choose <span className="text-brand-orange">Phonics Ki Pathshala</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Helping children build reading confidence through structured phonics learning.
          </p>
        </div>

        {/* 6 Choices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {choices.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-3xl border-2 ${item.bgColor} ${item.borderColor} bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-purple mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 size={14} /> Guaranteed Focus
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
