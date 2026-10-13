import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'What age group is suitable for Phonics Ki Pathshala?',
      a: 'Our programs are designed for children aged 4 to 11 years old. We offer structured learning tracks covering Phonics, Reading Fluency, Syllable Breakdown & Speed Handwriting.',
    },
    {
      q: 'What are the batch timings and days available?',
      a: 'We offer flexible batch slots from Monday to Saturday between 10:00 AM and 7:30 PM. Both weekday and weekend preference batches are available to fit school schedules.',
    },
    {
      q: 'How long does each program take to complete?',
      a: 'Most programs take between 2 to 4 months (8 to 16 weeks). Since we maintain small batch sizes (max 5-6 kids), progress is fast and thoroughly monitored.',
    },
    {
      q: 'Are trial classes or skill assessments available for new students?',
      a: 'Yes! We conduct a free 1-on-1 skill assessment with Shama Ma\'am to assess your child\'s current reading level, letter sound clarity, and pencil grip before assigning them to the ideal batch.',
    },
    {
      q: 'Are classes held online or offline?',
      a: 'Our primary program is conducted offline in our fully equipped, vibrant classroom located at Shop No. 111, 1st Floor, Lodha Shopping Centre, Dombivli (West). Hybrid options are available upon request.',
    },
    {
      q: 'How do I inquire about fees and register my child?',
      a: 'You can fill in our quick inquiry form below or click the WhatsApp button to get complete fee structure details and batch availability.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-[#FFF9F5]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            <HelpCircle size={14} className="text-brand-orange" /> Common Parent Questions
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-purple leading-tight mb-4">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Everything you need to know about our phonics & handwriting programs in Dombivli.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-amber-200/80 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-lg text-brand-purple hover:text-brand-orange transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-brand-orange transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
