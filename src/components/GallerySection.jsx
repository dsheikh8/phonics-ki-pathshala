import React from 'react';
import { Camera } from 'lucide-react';

export default function GallerySection() {
  const galleryItems = [
    {
      img: '/assets/classroom_1.jpg',
      title: 'Interactive Flashcard Session',
      category: 'Classroom Activity',
    },
    {
      img: '/assets/teacher_shama.png',
      title: 'Personalized 1-on-1 Guidance',
      category: 'Expert Mentorship',
    },
    {
      img: '/assets/classroom_2.jpg',
      title: 'Pencil Grip & Speed Writing',
      category: 'Handwriting Practice',
    },
    {
      img: '/assets/hero_illustration.png',
      title: 'Phonics Sound & Blend Cards',
      category: 'Multi-Sensory Learning',
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-purple-100 text-brand-purple text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            <Camera size={14} className="text-brand-orange" /> Life At Phonics Ki Pathshala
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-purple leading-tight mb-4">
            Classroom <span className="text-brand-orange">Gallery & Activities</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            A glimpse into our bright, interactive, and joyful learning center in Dombivli (West).
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-3xl overflow-hidden shadow-md border-4 border-white bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-yellow">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-lg leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
