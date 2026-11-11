import React, { useState } from 'react';
import { ShoppingBag, Zap, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-600/30 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-baseline">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                Vende<span className="text-brand-600">Fácil</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5"></span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#como-funciona"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#precios"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Precios
            </a>
            <a
              href="#ejemplos"
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Ejemplos
            </a>
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-100/80 rounded-xl transition-all cursor-pointer"
            >
              Iniciar sesión
            </button>
            <a
              href="#creador"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-md hover:shadow-brand-600/20 transition-all cursor-pointer"
            >
              <span>Crear mi tienda</span>
              <Zap className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenLogin}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              Acceder
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-600 hover:bg-slate-100 rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white/95 backdrop-blur-md animate-fadeIn">
            <div className="flex flex-col space-y-3 px-2">
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg"
              >
                Cómo funciona
              </a>
              <a
                href="#precios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg"
              >
                Precios ($99 MXN)
              </a>
              <a
                href="#ejemplos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg"
              >
                Ejemplos de tiendas
              </a>
              <div className="pt-2">
                <a
                  href="#creador"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brand-600 text-white font-semibold text-sm rounded-xl shadow-md"
                >
                  <span>Empezar por $99 MXN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
