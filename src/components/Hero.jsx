import React from 'react';
import { Sparkles, ShieldCheck, Zap, ArrowDown } from 'lucide-react';
import StoreBuilderCard from './StoreBuilderCard.jsx';

export default function Hero({ storeState, setStoreState, onPublishClick, children }) {
  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-brand-400/15 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-1/4 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Tag */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm shadow-slate-100 text-xs font-semibold text-slate-800 mb-5 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-brand-600 font-bold">$99 MXN/mes</span>
            <span className="text-slate-300">|</span>
            <span>La solución e-commerce más accesible de México</span>
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            Tu tienda en línea lista para vender.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-brand-500">
              Sin código, sin comisiones extra.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Crea tu página, sube tu primer producto y comienza a cobrar hoy mismo por solo{' '}
            <strong className="text-slate-900 font-bold underline decoration-brand-400 decoration-2 underline-offset-2">
              $99 MXN al mes
            </strong>
            . Pruébalo ahora mismo:
          </p>
        </div>

        {/* Split Screen Grid: Form (WYSIWYG) + Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Columna Izquierda: Formulario WYSIWYG */}
          <div className="lg:col-span-7">
            <StoreBuilderCard
              storeState={storeState}
              setStoreState={setStoreState}
              onPublishClick={onPublishClick}
            />
          </div>

          {/* Columna Derecha: Mockup del Smartphone */}
          <div className="lg:col-span-5 sticky top-24">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
