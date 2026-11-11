import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PhoneMockup from './components/PhoneMockup.jsx';
import TrustBar from './components/TrustBar.jsx';
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
      productName: example.productName,
      productPrice: example.price,
      productImage: example.imageUrl,
    });
    setToastMessage(`¡Tienda "${example.name}" cargada en el editor y teléfono!`);
    setTimeout(() => setToastMessage(null), 3500);

    // Smooth scroll up to hero creator
    const creatorElement = document.getElementById('creador');
    if (creatorElement) {
      creatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-brand-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Header onOpenLogin={() => setIsLoginOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Section: Split Screen with Interactive Form + Live Phone */}
        <Hero
          storeState={storeState}
          setStoreState={setStoreState}
          onPublishClick={handleOpenPublish}
        >
          <PhoneMockup storeState={storeState} />
        </Hero>

        {/* Trust Badges */}
        <TrustBar />

        {/* 4. Cómo Funciona en 3 Pasos */}
        <HowItWorks />

        {/* 3. Sección de Precio Transparente (Plan Lite $99 MXN) */}
        <Pricing onPublishClick={handleOpenPublish} />

        {/* Casos de Éxito / Ejemplos */}
        <StoreExamples
          onLoadExample={handleLoadExample}
          currentBrandName={storeState.brandName}
        />
      </main>

      {/* 5. Footer Completo */}
      <Footer />

      {/* Interactive Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-fadeIn">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Interactive Modals */}
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
