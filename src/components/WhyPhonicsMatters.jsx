import React from 'react';
import { BookOpen, Mic, SpellCheck, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyPhonicsMatters() {
  const points = [
    {
      icon: <BookOpen className="w-8 h-8 text-brand-orange" />,
      title: 'Reading Confidence',
      subtitle: 'No More Guesswork',
      desc: 'Instead of memorizing entire words blindly, children learn to blend 42+ letter sounds to decode any new or unfamiliar word independently.',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      icon: <Mic className="w-8 h-8 text-brand-purple" />,
      title: 'Flawless Pronunciation',
      subtitle: 'Clear Speech Clarity',
      desc: 'Mastering phoneme sounds ensures children speak clearly with accurate accent articulation, reducing hesitation when speaking in English.',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: <SpellCheck className="w-8 h-8 text-emerald-600" />,
      title: 'Systematic Spelling Skills',
      subtitle: 'Understand Spelling Logic',
      desc: 'Kids learn digraphs, vowel teams, and syllabification rules so they can spell multi-syllable words correctly without rote learning.',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: 'Public Speaking & Expression',
      subtitle: 'Fearless Communication',
      desc: 'Reading fluency builds natural public speaking confidence, empowering children to read storybooks aloud in school without stage fear.',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section id="why-phonics" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            <Sparkles size={14} className="text-brand-orange" /> Essential Early Literacy
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-purple leading-tight mb-4">
            Why Does <span className="text-brand-orange">Phonics Matter</span> for Your Child?
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Phonics is the proven scientific foundation of English reading. By connecting letter sounds with written letters, kids transition from struggling decoders to fluent readers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-3xl border-2 ${pt.bgColor} ${pt.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
                  {pt.icon}
                </div>
                <span className="text-xs font-bold font-heading text-slate-400 uppercase tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                {pt.subtitle}
              </span>
              <h3 className="font-heading font-bold text-xl text-brand-purple mb-2">
                {pt.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {pt.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 size={14} /> Proven Method
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
