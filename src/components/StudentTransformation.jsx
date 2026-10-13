import React from 'react';
import { AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function StudentTransformation() {
  const comparisons = [
    {
      before: 'Difficulty reading new or unfamiliar words; guesses blindly from picture cues.',
      after: 'Decodes any new word independently using 42+ synthetic phonics sound rules.',
    },
    {
      before: 'Struggles with pronunciation and hesitates when asked to read aloud in class.',
      after: 'Speaks clearly with accurate accent articulation and reads stories with joy.',
    },
    {
      before: 'Slow, illegible handwriting with incorrect pencil grip and messy notebook pages.',
      after: 'Neat, consistent handwriting with corrected tripod grip and faster exam writing speed.',
    },
    {
      before: 'Low confidence, frustration during homework, and fear of English reading exams.',
      after: 'High self-esteem, active participation in school, and a lifelong love for books.',
    },
  ];

  return (
    <section className="py-16 bg-[#FFF9F5] border-y border-amber-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            <TrendingUp size={14} className="text-emerald-600" /> Real Student Results
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-purple leading-tight mb-4">
            The Student <span className="text-brand-orange">Transformation Journey</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            See the remarkable difference Phonics Ki Pathshala brings to your child's confidence and literacy skills within 60 to 90 days.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {comparisons.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              {/* Before */}
              <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200/60 mb-4">
                <div className="flex items-center gap-2 text-rose-700 font-bold font-heading text-sm mb-1.5">
                  <AlertCircle size={16} /> Before Joining:
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.before}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="flex justify-center my-1">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-brand-orange flex items-center justify-center font-bold text-sm">
                  ↓
                </div>
              </div>

              {/* After */}
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200/60">
                <div className="flex items-center gap-2 text-emerald-800 font-bold font-heading text-sm mb-1.5">
                  <CheckCircle2 size={16} className="text-emerald-600" /> After Phonics Ki Pathshala:
                </div>
                <p className="text-slate-800 font-medium text-sm leading-relaxed">
                  {item.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
