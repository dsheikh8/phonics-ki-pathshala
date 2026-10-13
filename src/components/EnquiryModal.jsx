import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, defaultTopic }) {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('5');
  const [selectedTopic, setSelectedTopic] = useState(defaultTopic || 'General Admission Enquiry');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = `*Admission Inquiry* 🎓%0A%0A*Topic:* ${encodeURIComponent(selectedTopic)}%0A*Parent Name:* ${encodeURIComponent(parentName)}%0A*Child Name:* ${encodeURIComponent(childName || 'N/A')}%0A*Child Age:* ${encodeURIComponent(childAge)} yrs%0A*Contact Number:* ${encodeURIComponent(phone)}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/917338255202?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl border-2 border-brand-yellow/80 animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-rose-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-0.5 rounded-full mb-2">
                <Sparkles size={12} className="text-brand-orange" /> Limited Seats Available
              </span>
              <h3 className="font-heading font-bold text-2xl text-brand-purple">Inquire for Admission</h3>
              <p className="text-slate-600 text-xs mt-1">Inquiry Topic: <strong className="text-brand-orange">{selectedTopic}</strong></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Parent's Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Mrs. Sneha Kulkarni"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Child's Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Aarav"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Child Age *</label>
                  <select 
                    value={childAge} 
                    onChange={(e) => setChildAge(e.target.value)}
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
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">WhatsApp / Contact *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Select Topic</label>
                <select 
                  value={selectedTopic} 
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-purple focus:ring-2 focus:ring-purple-200 text-sm outline-none bg-slate-50 focus:bg-white"
                >
                  <option value="Phonics & Reading Fluency">Phonics & Reading Fluency</option>
                  <option value="Speed Writing & Handwriting">Speed Writing & Handwriting</option>
                  <option value="Need Free Skill Assessment First">Need Free Skill Assessment First</option>
                  <option value="General Admission Enquiry">General Admission Enquiry</option>
                </select>
              </div>

              <button type="submit" className="btn-primary-orange w-full py-3 text-base mt-2">
                <Send size={18} />
                <span>Submit & Chat on WhatsApp</span>
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 size={56} className="text-emerald-500 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Inquiry Sent!</h3>
            <p className="text-slate-600 text-sm mb-6">Opening WhatsApp with your inquiry details ({selectedTopic})...</p>
            <button onClick={onClose} className="btn-secondary-purple px-6 py-2 text-sm">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
