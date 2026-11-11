import React, { useRef, useState } from 'react';
import { 
  Store, 
  Tag, 
  Upload, 
  DollarSign, 
  Sparkles, 
  ArrowRight, 
  Image as ImageIcon,
  Check,
  Globe2,
  CheckCircle2,
  CreditCard,
  Percent,
  ShieldCheck,
  MessageCircle,
  X,
  Palette
} from 'lucide-react';
import { slugifyBrand, formatMXN } from '../utils/formatters.js';
import { PRODUCT_PRESETS, THEME_COLORS } from '../data/presets.js';

export default function StoreBuilderCard({ storeState, setStoreState, onPublishClick }) {
  const fileInputRef = useRef(null);
  const logoInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const brandSlug = slugifyBrand(storeState.brandName);

  const handleBrandChange = (e) => {
    setStoreState((prev) => ({ ...prev, brandName: e.target.value }));
  };

  const handleLogoUpload = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setStoreState((prev) => ({
        ...prev,
        brandLogo: event.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleProductChange = (e) => {
    setStoreState((prev) => ({ ...prev, productName: e.target.value }));
  };

  const handlePriceChange = (e) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    const num = rawVal === '' ? 0 : parseInt(rawVal, 10);
    setStoreState((prev) => ({ ...prev, productPrice: num }));
  };

  const handleFileUpload = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setStoreState((prev) => ({
        ...prev,
        productImage: event.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const applyPreset = (preset) => {
    setStoreState((prev) => ({
      ...prev,
      brandName: preset.name,
      productName: preset.productName,
      productPrice: preset.price,
      productImage: preset.imageUrl,
      themeColor: preset.themeColor || prev.themeColor,
    }));
  };

  return (
    <div id="creador" className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-200/80 relative overflow-hidden transition-all">
      {/* Decorative top ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-400" />

      {/* Header of the Card */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Creador en Vivo • Cero Código</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Personaliza tu Tienda Ahora
          </h2>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-xs text-slate-400 block">Inversión mensual</span>
          <span className="text-lg font-extrabold text-brand-600">$99 MXN</span>
        </div>
      </div>

      {/* 4 Interactive Steps */}
      <div className="space-y-5">
        
        {/* PASO 1: Nombre de Marca */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs flex items-center justify-center font-bold">1</span>
              Nombre de tu Marca
            </label>
            <span className="text-xs text-slate-400">Tu identidad</span>
          </div>
          <div className="relative">
            <Store className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={storeState.brandName}
              onChange={handleBrandChange}
              placeholder="Ej. Aura Streetwear, Don Pedro Café, etc."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all placeholder:text-slate-400"
            />
          </div>
          
          {/* Subdominio en vivo conciso con check de disponibilidad */}
          <div className="mt-1.5 flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-1.5 font-mono text-slate-600 truncate">
              <Globe2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span className="truncate">
                https://<strong className="text-brand-700 font-bold">{brandSlug}</strong>.vendefacil.online
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0 border border-emerald-200/70">
              <Check className="w-3 h-3 stroke-[3]" />
              <span>Disponible</span>
            </span>
          </div>

          {/* EFECTO OWNERSHIP: Subida de Logo Opcional + Selector de Color Anti-fricción */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/60 p-2.5 rounded-xl border border-slate-200/60">
            {/* Opcional: Sube tu logo */}
            <div>
              <input
                type="file"
                ref={logoInputRef}
                onChange={(e) => e.target.files?.[0] && handleLogoUpload(e.target.files[0])}
                accept="image/*"
                className="hidden"
              />
              {storeState.brandLogo ? (
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2 py-1 shadow-xs">
                  <img
                    src={storeState.brandLogo}
                    alt="Logo"
                    className="w-5 h-5 rounded object-cover"
                  />
                  <span className="text-[11px] font-semibold text-slate-700">Logo activo</span>
                  <button
                    type="button"
                    onClick={() => setStoreState((prev) => ({ ...prev, brandLogo: null }))}
                    className="text-slate-400 hover:text-rose-500 p-0.5 ml-0.5"
                    title="Eliminar logo"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => logoInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-dashed border-slate-300 hover:border-brand-500 bg-white hover:bg-brand-50/50 text-[11px] font-semibold text-slate-600 hover:text-brand-700 transition-all cursor-pointer"
                >
                  <Upload className="w-3 h-3 text-brand-600" />
                  <span>Opcional: Sube tu logo</span>
                </button>
              )}
            </div>

            {/* Selector de Color (5-6 círculos anti-fricción) */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                <Palette className="w-3 h-3" />
                <span>Color:</span>
              </span>
              <div className="flex items-center gap-1">
                {THEME_COLORS.map((col) => {
                  const isSelected = (storeState.themeColor?.id || 'violet') === col.id;
                  return (
                    <button
                      key={col.id}
                      type="button"
                      onClick={() => setStoreState((prev) => ({ ...prev, themeColor: col }))}
                      title={col.name}
                      className={`w-5 h-5 rounded-full transition-all cursor-pointer flex items-center justify-center ${col.bgClass} ${
                        isSelected
                          ? 'ring-2 ring-offset-2 ring-slate-800 scale-110 shadow-xs'
                          : 'opacity-80 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* PASO 2: Producto Estrella */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs flex items-center justify-center font-bold">2</span>
              Nombre de tu Producto Estrella
            </label>
            <span className="text-xs text-slate-400">¿Qué vas a vender hoy?</span>
          </div>
          <div className="relative">
            <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={storeState.productName}
              onChange={handleProductChange}
              placeholder="Ej. Playera Oversize, Café Orgánico 500g..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* PASO 3: Imagen del Producto (Drag & Drop + Presets) */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs flex items-center justify-center font-bold">3</span>
              Imagen del Producto
            </label>
            <span className="text-xs text-slate-400">JPG, PNG o WebP</span>
          </div>

          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer rounded-2xl border-2 border-dashed p-4 transition-all text-center flex flex-col items-center justify-center ${
              isDragging
                ? 'border-brand-600 bg-brand-50/50 scale-[1.01]'
                : 'border-slate-200 bg-slate-50/70 hover:bg-slate-50 hover:border-brand-400'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
              accept="image/*"
              className="hidden"
            />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-200 shadow-sm relative group">
                <img
                  src={storeState.productImage}
                  alt="Previsualización"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5 text-brand-600" />
                  <span>Arrastra una foto o haz clic para subir</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Almacenamiento optimizado automático en WebP
                </p>
              </div>
            </div>
          </div>

          {/* Presets de 1 clic */}
          <div className="mt-2.5">
            <p className="text-[11px] font-semibold text-slate-500 mb-1.5 flex items-center gap-1">
              <span>¿Sin fotos a mano? Prueba un preset rápido:</span>
            </p>
            <div className="grid grid-cols-3 gap-2">
              {PRODUCT_PRESETS.map((p) => {
                const isActive = storeState.productName === p.productName;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => applyPreset(p)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border text-left flex items-center gap-1.5 transition-all cursor-pointer ${
                      isActive
                        ? 'border-brand-600 bg-brand-50 text-brand-700 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="truncate">{p.category}</span>
                    {isActive && <Check className="w-3 h-3 text-brand-600 ml-auto shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* PASO 4: Precio del Producto */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs flex items-center justify-center font-bold">4</span>
              Precio del Producto (MXN)
            </label>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
              0% Comisiones de Plataforma
            </span>
          </div>
          <div className="relative">
            <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={storeState.productPrice === 0 ? '' : storeState.productPrice}
              onChange={handlePriceChange}
              placeholder="350"
              className="w-full pl-10 pr-16 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all placeholder:text-slate-400"
            />
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none">
              MXN
            </div>
          </div>

          {/* Quick Price Shortcuts for Instant Feedback */}
          <div className="mt-2 flex items-center gap-1.5 text-xs">
            <span className="text-[11px] text-slate-400">Atajos rápidos:</span>
            {[199, 320, 450, 790].map((quickPrice) => (
              <button
                key={quickPrice}
                type="button"
                onClick={() => setStoreState((prev) => ({ ...prev, productPrice: quickPrice }))}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border transition-all cursor-pointer ${
                  storeState.productPrice === quickPrice
                    ? 'bg-brand-100 border-brand-300 text-brand-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                ${quickPrice}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-8 pt-5 border-t border-slate-100">
        <button
          onClick={onPublishClick}
          className="w-full py-4 px-6 bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-bold text-base rounded-2xl shadow-xl shadow-brand-600/30 hover:shadow-brand-600/40 transition-all flex items-center justify-center gap-3 group cursor-pointer animate-pulse-subtle"
        >
          <span>Publicar esta tienda por $99 MXN/mes</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-2.5 text-center text-xs text-slate-500">
          Tu URL será: <span className="font-semibold text-slate-800">https://{brandSlug}.vendefacil.online</span>
          <span className="mx-1.5">•</span>
          Sin contratos forzosos
        </p>

        {/* Condensed Trust Badges right below CTA */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-500 font-medium">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <CreditCard className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span className="truncate">Mercado Pago</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <Percent className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">0% Comisiones</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">Cifrado SSL 256</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <MessageCircle className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span className="truncate">WhatsApp Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}
