import React from 'react';
import { MessageCircle, MapPin, ArrowUp, Sparkles, BookOpen } from 'lucide-react';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top Action Strip */}
      <div className="bg-gradient-to-r from-brand-purple via-purple-900 to-brand-orange py-10 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-brand-yellow text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Sparkles size={14} /> Start Your Child's Phonics Journey
            </span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
              Ready to Transform Your Child into a Confident Reader?
            </h3>
            <p className="text-purple-100 text-sm md:text-base mt-1">
              Admissions open for Ages 4–11 in Dombivli! Book a free skill assessment session today.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button 
              onClick={() => onOpenEnquiry('General Enquiry')}
              className="btn-primary-orange text-sm px-6 py-3"
            >
              <BookOpen size={18} />
              <span>Enroll Now</span>
            </button>
            <a 
              href="https://wa.me/917338255202?text=Hello%20Shama%20ma%27am,%20I%20want%20to%20enroll%20my%20child."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-green text-sm px-6 py-3"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Phonics Ki Pathshala Logo" className="w-12 h-12 rounded-xl object-cover" />
            <div>
              <h4 className="font-heading font-bold text-xl text-white">Phonics Ki Pathshala</h4>
              <span className="text-xs text-brand-yellow font-bold uppercase tracking-wider block">by Shama</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Premier Jolly & Synthetic Phonics, Reading Fluency, and Speed Handwriting academy for children aged 4 to 11 in Dombivli (West), Mumbai.
          </p>
          <div className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1.5 rounded-full inline-block">
            ✨ Admissions Open 2026 Batches
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-heading font-bold text-white text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-orange">
            Quick Links
          </h5>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#about" className="hover:text-brand-orange transition-colors">About Shama Ma'am</a></li>
            <li><a href="#why-phonics" className="hover:text-brand-orange transition-colors">Why Phonics Matters</a></li>
            <li><a href="#phonics-demo" className="hover:text-brand-orange transition-colors">Phonics Demo</a></li>
            <li><a href="#gallery" className="hover:text-brand-orange transition-colors">Classroom Gallery</a></li>
            <li><a href="#why-choose-us" className="hover:text-brand-orange transition-colors">Why Choose Us</a></li>
            <li><a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-brand-orange transition-colors">Location & Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-heading font-bold text-white text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-orange">
            Location & Contact
          </h5>
          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
              <span>Shop No. 111, 1st Floor, Lodha Shopping Centre, Lodha Heaven, near Shivaji Chowk, Dombivli, Maharashtra.</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-emerald-400 flex-shrink-0" />
              <a href="https://wa.me/917338255202" target="_blank" rel="noreferrer" className="hover:text-emerald-400 font-bold">Chat on WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} <strong>Phonics Ki Pathshala by Shama</strong>. All Rights Reserved. Designed for Young Readers.</p>
          <button 
            onClick={scrollToTop} 
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
