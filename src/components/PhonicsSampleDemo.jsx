import React, { useState } from 'react';
import { Volume2, Sparkles } from 'lucide-react';

export default function PhonicsSampleDemo() {
  const demos = [
    {
      sounds: ['c', 'a', 't'],
      phonemes: ['/k/', '/æ/', '/t/'],
      word: 'cat',
      emoji: '🐱',
      category: 'CVC Blending',
    },
    {
      sounds: ['sh', 'i', 'p'],
      phonemes: ['/ʃ/', '/ɪ/', '/p/'],
      word: 'ship',
      emoji: '🚢',
      category: 'Digraph Blending',
    },
    {
      sounds: ['f', 'i', 'sh'],
      phonemes: ['/f/', '/ɪ/', '/ʃ/'],
      word: 'fish',
      emoji: '🐟',
      category: 'Consonant + Digraph',
    },
  ];

  const [activePlayingIndex, setActivePlayingIndex] = useState(null);

  const handlePlayAudio = (demo, index) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setActivePlayingIndex(index);

      // Play individual sounds then full word
      const textToSpeak = `${demo.sounds.join(', ')} ... ${demo.word}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      
      utterance.onend = () => setActivePlayingIndex(null);
      utterance.onerror = () => setActivePlayingIndex(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="phonics-demo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            <Sparkles size={14} className="text-brand-orange" /> How We Teach Phonics
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-purple leading-tight mb-4">
            Sample Phonics <span className="text-brand-orange">Demonstration</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            See how children learn to assemble phoneme sounds step-by-step to read full words effortlessly.
          </p>
        </div>

        {/* 3 Word Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {demos.map((d, idx) => (
            <div 
              key={idx} 
              className="bg-[#FFF9F5] rounded-3xl p-6 border-2 border-amber-200/70 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all"
            >
              <span className="text-xs font-bold text-brand-purple bg-purple-100 px-3 py-0.5 rounded-full mb-4">
                {d.category}
              </span>

              {/* Sound Tiles */}
              <div className="flex items-center gap-2 mb-4">
                {d.sounds.map((sound, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <div className="w-12 h-14 bg-white border-2 border-brand-orange rounded-2xl flex flex-col items-center justify-center shadow-sm">
                      <span className="font-heading font-bold text-xl text-slate-800">{sound}</span>
                      <span className="text-[10px] text-slate-400">{d.phonemes[sIdx]}</span>
                    </div>
                    {sIdx < d.sounds.length - 1 && (
                      <span className="font-bold text-amber-500 text-lg">+</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="text-2xl font-bold text-amber-500 mb-3">=</div>

              {/* Blended Result */}
              <div className="bg-white px-6 py-3 rounded-2xl border border-emerald-300 shadow-sm flex items-center gap-3 mb-5">
                <span className="text-3xl">{d.emoji}</span>
                <span className="font-heading font-bold text-2xl text-brand-purple uppercase tracking-wide">
                  {d.word}
                </span>
              </div>

              {/* Audio Play Button */}
              <button
                onClick={() => handlePlayAudio(d, idx)}
                className={`w-full py-2.5 px-4 rounded-full font-heading font-bold text-sm flex items-center justify-center gap-2 transition-all ${activePlayingIndex === idx ? 'bg-amber-400 text-slate-900' : 'bg-brand-purple text-white hover:bg-brand-purpleDark'}`}
              >
                <Volume2 size={16} className={activePlayingIndex === idx ? 'animate-pulse' : ''} />
                <span>{activePlayingIndex === idx ? 'Playing Sounds...' : 'Hear Sound Blend'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
