import React, { useState } from 'react';
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
import { DEFAULT_STORE } from './data/presets.js';

export default function App() {
  const [storeState, setStoreState] = useState(DEFAULT_STORE);
  const [isPublishOpen, setIsPublishOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenPublish = () => {
    setIsPublishOpen(true);
  };

  const handleLoadExample = (example) => {
    setStoreState({
      brandName: example.name,
      brandLogo: null,
      themeColor: example.themeColor || DEFAULT_STORE.themeColor,
      categoryTitle: example.category || DEFAULT_STORE.categoryTitle,
      productName: example.productName,
      productPrice: example.price,
      productImage: example.imageUrl,
      heroImage: example.heroImageUrl || example.imageUrl,
      secondaryProduct: example.secondaryProduct || null,
    });
    setToastMessage(`Tienda “${example.name}” cargada en el editor.`);
    setTimeout(() => setToastMessage(null), 3200);

    const creatorElement = document.getElementById('creador');
    if (creatorElement) {
      creatorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F4F1] flex flex-col text-[#14151A]">
      <Header onOpenLogin={() => setIsLoginOpen(true)} />

      <main className="flex-1">
        <Hero
          storeState={storeState}
          setStoreState={setStoreState}
          onPublishClick={handleOpenPublish}
        >
          <PhoneMockup storeState={storeState} />
        </Hero>

        <HowItWorks />

        <Pricing onPublishClick={handleOpenPublish} />

        <StoreExamples
          onLoadExample={handleLoadExample}
          currentBrandName={storeState.brandName}
        />
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

      <PublishModal
        isOpen={isPublishOpen}
        onClose={() => setIsPublishOpen(false)}
        storeState={storeState}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}
