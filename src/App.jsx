import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PhoneMockup from './components/PhoneMockup.jsx';
import LoginModal from './components/LoginModal.jsx';
import { DEFAULT_STORE } from './data/presets.js';

export default function App() {
  const [storeState, setStoreState] = useState(DEFAULT_STORE);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handlePublishClick = () => {
    alert(`Publicando ${storeState.brandName} por $99 MXN/mes...`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-brand-500 selection:text-white">
      <Header onOpenLogin={() => setIsLoginOpen(true)} />
      
      <main className="flex-1">
        <Hero
          storeState={storeState}
          setStoreState={setStoreState}
          onPublishClick={handlePublishClick}
        >
          <PhoneMockup storeState={storeState} />
        </Hero>
      </main>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
