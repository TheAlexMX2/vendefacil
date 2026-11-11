import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Lock, 
  ShoppingBag, 
  CheckCircle, 
  Share2, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { slugifyBrand, formatMXN } from '../utils/formatters.js';

export default function PhoneMockup({ storeState }) {
  const [cartCount, setCartCount] = useState(1);
  const [boughtSuccess, setBoughtSuccess] = useState(false);

  const brandSlug = slugifyBrand(storeState.brandName);
  const displayBrand = storeState.brandName.trim() || 'Mi Tienda';
  const displayProduct = storeState.productName.trim() || 'Producto Estrella';
  const displayPrice = storeState.productPrice > 0 ? storeState.productPrice : 0;

  const handleSimulatedBuy = () => {
    setBoughtSuccess(true);
    setTimeout(() => setBoughtSuccess(false), 2200);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Label indicator */}
      <div className="flex items-center gap-2 mb-3 px-3 py-1 bg-white/90 border border-slate-200/80 rounded-full shadow-sm text-xs font-semibold text-slate-700">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Previsualización en Tiempo Real</span>
      </div>

      {/* Phone Outer Chassis (Modern Smartphone) */}
      <div className="relative w-[320px] sm:w-[350px] bg-slate-900 rounded-[50px] p-3.5 shadow-phone border-4 border-slate-800 transition-all">
        {/* Side physical buttons simulated */}
        <div className="absolute -left-5 top-28 w-1 h-12 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-5 top-44 w-1 h-12 bg-slate-700 rounded-l-md" />
        <div className="absolute -right-5 top-32 w-1 h-16 bg-slate-700 rounded-r-md" />

        {/* Screen Bezel */}
        <div className="relative bg-white rounded-[40px] overflow-hidden flex flex-col h-[640px] border border-slate-100">
          
          {/* Dynamic Island & Status Bar */}
          <div className="pt-3 px-6 pb-2 bg-slate-50 border-b border-slate-100/80 flex items-center justify-between text-[11px] font-semibold text-slate-800 select-none">
            <span>9:41</span>
            
            {/* Dynamic Island pill */}
            <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-1.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[8px] font-mono text-white/90">vendefacil</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Wifi className="w-3 h-3 text-slate-700" />
              <Battery className="w-3.5 h-3.5 text-slate-700" />
            </div>
          </div>

          {/* Browser Address Bar */}
          <div className="px-4 py-1.5 bg-slate-100/90 border-b border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-600">
            <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
            <span className="font-mono truncate font-medium text-slate-800">
              {brandSlug}.vendefacil.online
            </span>
          </div>

          {/* Phone Scrollable Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar bg-gradient-to-b from-white to-slate-50 flex flex-col">
            
            {/* Store Top Nav */}
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                  {displayBrand.charAt(0).toUpperCase()}
                </div>
                <span className="font-bold text-slate-900 text-sm tracking-tight truncate max-w-[150px]">
                  {displayBrand}
                </span>
              </div>

              <div className="relative p-1.5 text-slate-600 hover:text-brand-600 cursor-pointer">
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-600 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
            </div>

            {/* Product Card Container */}
            <div className="p-4 flex-1 flex flex-col">
              
              {/* Product Hero Image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm mb-3.5 group">
                <img
                  src={storeState.productImage}
                  alt={displayProduct}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold text-brand-700 shadow-sm border border-slate-100 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-brand-600" />
                  <span>NUEVO</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-1 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Producto Destacado
                  </span>
                  <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> En Stock
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug break-words">
                  {displayProduct}
                </h3>

                <div className="pt-1 flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-slate-900">
                    {formatMXN(displayPrice)}
                  </span>
                  <span className="text-[11px] text-slate-400 line-through">
                    {formatMXN(displayPrice * 1.25)}
                  </span>
                </div>
              </div>

              {/* Buy Action with Mercado Pago Simulated */}
              <div className="mt-auto pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleSimulatedBuy}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                    boughtSuccess
                      ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                      : 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-600/25 active:scale-95'
                  }`}
                >
                  {boughtSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-white" />
                      <span>¡Pedido de prueba exitoso!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Comprar con Mercado Pago</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pago protegido • Envío asegurado</span>
                </div>
              </div>
            </div>

            {/* Simulated Store Footer inside phone */}
            <div className="py-2.5 px-4 bg-slate-100 border-t border-slate-200/50 text-center text-[10px] text-slate-400">
              Tienda creada con <strong className="text-slate-600 font-semibold">VendeFácil</strong>
            </div>

          </div>

          {/* Home Indicator Bar */}
          <div className="py-1.5 bg-slate-50 flex justify-center">
            <div className="w-28 h-1 bg-slate-300 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
