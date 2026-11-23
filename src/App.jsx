import React from 'react';
import { Check } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PhoneMockup from './components/PhoneMockup.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Pricing from './components/Pricing.jsx';
import StoreExamples from './components/StoreExamples.jsx';
import Footer from './components/Footer.jsx';
import PublishModal from './components/PublishModal.jsx';
import LoginModal from './components/LoginModal.jsx';
import { useUIStore } from './stores/useUIStore.js';

export default function App() {
  const toastMessage = useUIStore((s) => s.toastMessage);

  return (
    <div className="min-h-screen bg-[#F6F4F1] flex flex-col text-[#14151A]">
      <Header />

      <main className="flex-1">
        <Hero>
          <PhoneMockup />
        </Hero>

        <HowItWorks />

        <Pricing />

        <StoreExamples />
      </main>

      <Footer />

      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#14151A] text-white px-4 py-3 rounded-xl shadow-modal border border-white/10 flex items-center gap-2.5 text-[13px] font-medium"
        >
          <Check className="w-4 h-4 text-[#5CC4BF] shrink-0" strokeWidth={2.5} aria-hidden="true" />
          <span>{toastMessage}</span>
        </div>
      )}

      <PublishModal />

      <LoginModal />
    </div>
  );
}
