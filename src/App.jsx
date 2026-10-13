import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyPhonicsMatters from './components/WhyPhonicsMatters';
import MeetShama from './components/MeetShama';
import CoreBenefits from './components/CoreBenefits';
import StudentTransformation from './components/StudentTransformation';
import PhonicsSampleDemo from './components/PhonicsSampleDemo';
import GallerySection from './components/GallerySection';
import WhyParentsChooseSection from './components/WhyParentsChooseSection';
import FAQSection from './components/FAQSection';
import LocationContactSection from './components/LocationContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedEnquiryTopic, setSelectedEnquiryTopic] = useState('General Enquiry');

  const handleOpenEnquiry = (topic = 'General Enquiry') => {
    setSelectedEnquiryTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-slate-800 font-body selection:bg-brand-orange selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* 2. Hero Section */}
      <Hero onOpenEnquiry={handleOpenEnquiry} />

      {/* 3. Why Phonics Matters */}
      <WhyPhonicsMatters />

      {/* 4. Meet Shama (Teacher Introduction & Credibility) */}
      <MeetShama onOpenEnquiry={handleOpenEnquiry} />

      {/* 5. Core Benefits */}
      <CoreBenefits />

      {/* 6. Student Transformation Journey (Before vs After) */}
      <StudentTransformation />

      {/* 7. Sample Phonics Demonstration */}
      <PhonicsSampleDemo />

      {/* 8. Classroom & Activity Gallery */}
      <GallerySection />

      {/* 9. Why Parents Choose Phonics Ki Pathshala */}
      <WhyParentsChooseSection />

      {/* 10. Frequently Asked Questions (Accordion) */}
      <FAQSection />

      {/* 11. Location & Contact Form */}
      <LocationContactSection preselectedTopic={selectedEnquiryTopic} />

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* 12. Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Pop-up Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultTopic={selectedEnquiryTopic}
      />
    </div>
  );
}
