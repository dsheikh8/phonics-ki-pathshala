import React, { useState } from 'react';
import { MapPin, MessageCircle, Clock, Send, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';

export default function LocationContactSection({ preselectedTopic }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '5',
    phone: '',
    selectedTopic: preselectedTopic || 'Phonics & Reading Fluency',
    preferredBatch: 'Weekday Evening',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = `*New Admission Inquiry* 🎓%0A%0A*Parent Name:* ${encodeURIComponent(formData.parentName)}%0A*Child Name:* ${encodeURIComponent(formData.childName || 'N/A')}%0A*Child Age:* ${encodeURIComponent(formData.childAge)} yrs%0A*Contact Number:* ${encodeURIComponent(formData.phone)}%0A*Inquiry Topic:* ${encodeURIComponent(formData.selectedTopic)}%0A*Preferred Batch:* ${encodeURIComponent(formData.preferredBatch)}`;

    setTimeout(() => {
      window.open(`https://wa.me/917338255202?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full mb-3">
            <MapPin size={14} className="text-emerald-600" /> Center Location & Inquiry
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-purple leading-tight mb-4">
            Visit Our Dombivli Center or <span className="text-brand-orange">Send an Inquiry</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            We are conveniently located near Shivaji Chowk in Dombivli (West). Connect with us to reserve your child’s seat.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address Card & Map Embed */}
          <div className="lg:col-span-6 bg-[#FFF9F5] p-6 md:p-8 rounded-3xl border border-amber-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-2xl text-brand-purple mb-6 pb-3 border-b border-amber-200">
                Phonics Ki Pathshala Learning Center
              </h3>

              <div className="space-y-4 mb-6 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="block font-bold text-slate-900">Address:</strong>
                    <p className="text-slate-600">
                      Shop No. 111, 1st Floor, Lodha Shopping Centre, Lodha Heaven, near Shivaji Chowk, Dombivli, Maharashtra.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <strong className="block font-bold text-slate-900">WhatsApp Chat:</strong>
                    <a 
                      href="https://wa.me/917338255202?text=Hello%20Shama%20ma%27am,%20I%20want%20to%20inquire%20about%20classes."
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 font-bold hover:underline"
                    >
                      Click to chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="block font-bold text-slate-900">Class Hours:</strong>
                    <p className="text-slate-600">Mon - Sat: 10:00 AM - 7:30 PM (Weekday & Weekend Batches)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-4 pt-4 border-t border-amber-200/60">
              <div className="rounded-2xl overflow-hidden border border-slate-200 mb-3 shadow-inner">
                <iframe
                  title="Phonics Ki Pathshala by Shama Dombivli Location"
                  src="https://maps.google.com/maps?q=Phonics%20Ki%20Pathshala%20by%20Shama,%20Dombivli&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Phonics+Ki+Pathshala+by+Shama+Dombivli"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple bg-white border border-purple-200 px-4 py-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors"
                >
                  <MapPin size={14} /> Open in Maps
                </a>

                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Phonics+Ki+Pathshala+by+Shama+Dombivli"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange bg-white border border-amber-200 px-4 py-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-3xl border-2 border-brand-orange/30 shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="font-heading font-bold text-2xl text-brand-purple">Quick Admission Inquiry Form</h3>
            </div>
            <p className="text-slate-600 text-sm mb-6">Fill in your details below to receive full fee structure & slot availability.</p>

            {submitted ? (
              <div className="text-center py-8 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">Inquiry Submitted Successfully!</h4>
                <p className="text-slate-600 text-sm mb-4">Opening WhatsApp with your pre-filled inquiry details...</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-brand-purple font-bold underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Parent's Name *</label>
                    <input 
                      type="text" 
                      name="parentName"
                      required
                      placeholder="e.g. Mrs. Sunita Sharma"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Child's Name</label>
                    <input 
                      type="text" 
                      name="childName"
                      placeholder="e.g. Aarav"
                      value={formData.childName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Child Age *</label>
                    <select 
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                    >
                      <option value="4">4 Years</option>
                      <option value="5">5 Years</option>
                      <option value="6">6 Years</option>
                      <option value="7">7 Years</option>
                      <option value="8">8 Years</option>
                      <option value="9">9 Years</option>
                      <option value="10">10 Years</option>
                      <option value="11">11 Years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">WhatsApp / Contact No. *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Inquiry Topic *</label>
                  <select 
                    name="selectedTopic"
                    value={formData.selectedTopic}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                  >
                    <option value="Phonics & Reading Fluency">Phonics & Reading Fluency</option>
                    <option value="Speed Writing & Handwriting">Speed Writing & Handwriting</option>
                    <option value="Need Free Skill Assessment">Need Free Skill Assessment First</option>
                    <option value="General Admission Inquiry">General Admission Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Preferred Batch Timing</label>
                  <select 
                    name="preferredBatch"
                    value={formData.preferredBatch}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                  >
                    <option value="Weekday Evening">Weekday Evening (Mon-Fri)</option>
                    <option value="Weekday Morning">Weekday Morning (Mon-Fri)</option>
                    <option value="Weekend Saturday/Sunday">Weekend (Sat / Sun)</option>
                    <option value="Flexible">Flexible / Open</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary-orange w-full py-3.5 text-base mt-2">
                  <Send size={18} />
                  <span>Submit & Connect on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
