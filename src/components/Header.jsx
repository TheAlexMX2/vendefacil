import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6F4F1]/95 backdrop-blur-sm border-b border-[#E6E4DF]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-14 sm:h-[60px]">
          <a href="#" className="flex items-center gap-2.5 group focus-visible:outline-none">
            <span className="w-8 h-8 rounded-lg bg-[#14151A] text-white flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
                <path
                  d="M6 7.5L11.4 17.5H12.6L18 7.5"
                  stroke="#FFFFFF"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2 9.8L18.2 7.5"
                  stroke="#2D9B97"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-[19px] font-bold tracking-[-0.02em] text-[#14151A]">
              VendeFácil
            </span>
          </a>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
            <a
              href="#como-funciona"
              className="text-[14px] font-medium text-[#3F3F46] hover:text-[#14151A] transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#precios"
              className="text-[14px] font-medium text-[#3F3F46] hover:text-[#14151A] transition-colors"
            >
              Precios
            </a>
            <a
              href="#ejemplos"
              className="text-[14px] font-medium text-[#3F3F46] hover:text-[#14151A] transition-colors"
            >
              Ejemplos
            </a>
            <button
              type="button"
              onClick={onOpenLogin}
              className="text-[14px] font-medium text-[#14151A] hover:text-[#156563] transition-colors cursor-pointer"
            >
              Iniciar sesión
            </button>
            <a
              href="#creador"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#156563] hover:bg-[#104E4D] text-white text-[14px] font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Crear mi tienda
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenLogin}
              className="px-3 py-1.5 text-[13px] font-semibold text-[#14151A] border border-[#D5D1C9] rounded-lg bg-white"
            >
              Acceder
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 text-[#14151A] hover:bg-[#F3F1ED] rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E6E4DF] bg-[#FAFAF9]">
            <div className="flex flex-col space-y-1">
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2.5 text-[15px] font-medium text-[#14151A] hover:text-[#156563]"
              >
                Cómo funciona
              </a>
              <a
                href="#precios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2.5 text-[15px] font-medium text-[#14151A] hover:text-[#156563]"
              >
                Precios ($99 MXN)
              </a>
              <a
                href="#ejemplos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2.5 text-[15px] font-medium text-[#14151A] hover:text-[#156563]"
              >
                Ejemplos interactivos
              </a>
              <div className="pt-3">
                <a
                  href="#creador"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 bg-[#156563] hover:bg-[#104E4D] text-white font-semibold text-[14px] rounded-lg transition-colors"
                >
                  Crear mi tienda
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
