import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, MapPin } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Shama', href: '#about' },
    { name: 'Why Phonics', href: '#why-phonics' },
    { name: 'Phonics Demo', href: '#phonics-demo' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-[#FFF9F5]/90 backdrop-blur-sm'}`}>
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#4B1F74] via-[#6B329E] to-[#FF8A00] text-white text-xs md:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping inline-block"></span>
            <span className="bg-brand-yellow/20 text-brand-yellow text-xs px-2 py-0.5 rounded-full font-bold">Admissions Open 2026</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-xs sm:text-sm">Batch Sizes Limited (Max 5-6 Kids)</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href="https://wa.me/917338255202?text=Hello%20Shama%20ma%27am,%20I%20want%20to%20inquire%20about%20phonics%20classes." 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white transition-colors"
            >
              <MessageCircle size={13} /> <span>WhatsApp</span>
            </a>
            <span className="hidden md:inline opacity-40">|</span>
            <span className="hidden md:flex items-center gap-1 opacity-90">
              <MapPin size={13} /> Dombivli (W), Mumbai
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo.png" 
            alt="Phonics Ki Pathshala Logo" 
            className="w-12 h-12 rounded-xl object-cover shadow-brand transition-transform group-hover:scale-105 group-hover:rotate-[-3deg]" 
          />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl md:text-2xl text-brand-purple leading-tight tracking-tight">
              Phonics Ki Pathshala
            </span>
            <span className="text-xs font-bold text-brand-orange tracking-wider uppercase">
              by Shama
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-700 hover:text-brand-purple transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={() => onOpenEnquiry('General Enquiry')}
            className="btn-primary-orange text-sm px-5 py-2.2 hover:scale-105"
          >
            <Sparkles size={16} />
            <span>Enroll Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-brand-purple focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-brand-purple px-5 py-4 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-semibold text-base text-slate-800 py-1.5 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <a 
              href="https://wa.me/917338255202?text=Hello%20Shama%20ma%27am,%20I%20want%20to%20know%20more%20about%20Phonics%20Ki%20Pathshala."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-green w-full py-2.5 text-center text-sm"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('General Enquiry');
              }}
              className="btn-primary-orange w-full py-2.5 text-sm"
            >
              <Sparkles size={16} /> Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
