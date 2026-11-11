import React, { useState } from 'react';
import Header from './components/Header.jsx';
import LoginModal from './components/LoginModal.jsx';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header onOpenLogin={() => setIsLoginOpen(true)} />
      
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-lg">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full mb-3">
            Fase 2: Layout & Header Operativos
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">VendeFácil</h2>
          <p className="text-slate-600 text-sm">
            Navegación sticky, enlaces, y modal de login integrados. Listo para montar el Hero interactivo.
          </p>
        </div>
      </main>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
