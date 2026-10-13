import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917338255202?text=Hello%20Shama%20ma%27am,%20I%20want%20to%20inquire%20about%20Phonics%20Ki%20Pathshala."
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse-glow"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat with Shama Ma'am
        </span>
      </a>
    </div>
  );
}
