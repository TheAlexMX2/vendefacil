import React, { useRef } from 'react';
import { Upload, Check, X } from 'lucide-react';
import { slugifyBrand } from '../utils/formatters.js';
import { PHOTO_PRESETS, THEME_COLORS } from '../data/presets.js';
import { useBuilderStore } from '../stores/useBuilderStore.js';
import { useUIStore } from '../stores/useUIStore.js';

const STEPS = [
  { id: 1, label: 'Tu marca', shortLabel: 'Marca' },
  { id: 2, label: 'Apariencia', shortLabel: 'Estilo' },
  { id: 3, label: 'Producto', shortLabel: 'Foto' },
  { id: 4, label: 'Publicar', shortLabel: 'Precio' },
];

export default function StoreBuilderCard() {
  const fileInputRef = useRef(null);
  const logoInputRef = useRef(null);
  const brandInputRef = useRef(null);
  const productInputRef = useRef(null);
  const priceInputRef = useRef(null);
  const colorSectionRef = useRef(null);

  const brandName = useBuilderStore((s) => s.brandName);
  const brandLogo = useBuilderStore((s) => s.brandLogo);
  const themeColor = useBuilderStore((s) => s.themeColor);
  const productName = useBuilderStore((s) => s.productName);
  const productPrice = useBuilderStore((s) => s.productPrice);
  const productImage = useBuilderStore((s) => s.productImage);
  const activeStep = useBuilderStore((s) => s.activeStep);
  const isDragging = useBuilderStore((s) => s.isDragging);

  const setActiveStep = useBuilderStore((s) => s.setActiveStep);
  const setIsDragging = useBuilderStore((s) => s.setIsDragging);
  const setBrandName = useBuilderStore((s) => s.setBrandName);
  const clearBrandLogo = useBuilderStore((s) => s.clearBrandLogo);
  const uploadLogoFile = useBuilderStore((s) => s.uploadLogoFile);
  const setThemeColor = useBuilderStore((s) => s.setThemeColor);
  const setProductName = useBuilderStore((s) => s.setProductName);
  const setProductPriceFromInput = useBuilderStore((s) => s.setProductPriceFromInput);
  const uploadProductFile = useBuilderStore((s) => s.uploadProductFile);
  const applyPhotoPreset = useBuilderStore((s) => s.applyPhotoPreset);

  const openPublishModal = useUIStore((s) => s.openPublishModal);

  const brandSlug = slugifyBrand(brandName);

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
    if (stepId === 1) brandInputRef.current?.focus();
    if (stepId === 2) colorSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    if (stepId === 3) productInputRef.current?.focus();
    if (stepId === 4) priceInputRef.current?.focus();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadProductFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      id="creador"
      className="bg-white rounded-2xl border border-[#E6E4DF] shadow-builder overflow-hidden flex flex-col sm:flex-row"
    >
      <div
        role="tablist"
        aria-label="Pasos para configurar tu tienda"
        className="sm:w-[168px] shrink-0 bg-[#FAF9F7] sm:border-r border-b sm:border-b-0 border-[#ECEAE4] p-2 sm:py-4 sm:px-3.5 grid grid-cols-4 sm:flex sm:flex-col gap-1 sm:gap-1.5"
      >
        {STEPS.map((step) => {
          const isCurrent = activeStep === step.id;
          return (
            <button
              key={step.id}
              type="button"
              role="tab"
              aria-selected={isCurrent}
              onClick={() => handleStepClick(step.id)}
              className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 px-1.5 py-1.5 sm:px-2.5 sm:py-2 rounded-lg text-[11.5px] sm:text-[13px] transition-colors duration-200 ease-expo cursor-pointer text-left ${
                isCurrent
                  ? 'bg-[#EEF5F4] text-[#14151A] font-semibold'
                  : 'text-[#52525B] hover:text-[#14151A] hover:bg-[#F2F0EC] font-medium'
              }`}
            >
              <span
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full text-[10px] sm:text-[11px] font-semibold flex items-center justify-center shrink-0 tabular-nums transition-colors duration-200 ease-expo ${
                  isCurrent ? 'bg-[#156563] text-white' : 'bg-[#E5E3DD] text-[#52525B]'
                }`}
              >
                {step.id}
              </span>
              <span className="sm:hidden truncate">{step.shortLabel}</span>
              <span className="hidden sm:inline truncate">{step.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex-1 p-4 sm:px-6 sm:py-4 flex flex-col justify-between gap-2.5 sm:gap-3">
        <div>
          <label htmlFor="brand-name-input" className="sr-only">
            Nombre de tu marca
          </label>
          <input
            id="brand-name-input"
            ref={brandInputRef}
            type="text"
            value={brandName}
            onFocus={() => setActiveStep(1)}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Nombre de tu marca"
            className="w-full text-[20px] font-bold tracking-[-0.015em] text-[#14151A] bg-transparent border-b border-[#D5D1C9] hover:border-[#ADA79C] focus:border-[#156563] focus:outline-none pb-0.5 transition-colors duration-200 ease-expo placeholder:text-[#9A9891]"
          />
          <div className="mt-1 flex items-center gap-1.5 text-[12px]">
            <span className="font-medium text-[#52525B] truncate">
              {brandSlug}.vendefacil.online
            </span>
            <span className="text-[#9A9891]" aria-hidden="true">·</span>
            <span className="font-semibold text-[#156563] shrink-0">Disponible</span>
          </div>
        </div>

        <div ref={colorSectionRef} className="flex flex-wrap items-center gap-4">
          <div>
            <input
              type="file"
              ref={logoInputRef}
              onChange={(e) => e.target.files?.[0] && uploadLogoFile(e.target.files[0])}
              accept="image/*"
              className="hidden"
            />
            {brandLogo ? (
              <div className="w-[76px] h-[48px] rounded-lg border border-[#D5D1C9] bg-[#FAFAF9] px-1.5 flex items-center justify-between gap-1">
                <img
                  src={brandLogo}
                  alt="Logo de marca"
                  className="w-9 h-9 object-contain rounded"
                />
                <button
                  type="button"
                  onClick={clearBrandLogo}
                  className="p-1 text-[#6E6D74] hover:text-[#14151A] cursor-pointer"
                  aria-label="Quitar logo"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => logoInputRef.current?.click()}
                className="w-[76px] h-[48px] rounded-lg border border-dashed border-[#D5D1C9] hover:border-[#156563] bg-[#FAFAF9] flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-200 ease-expo"
              >
                <span className="text-[11.5px] font-semibold text-[#14151A] leading-tight">Logo</span>
                <span className="text-[10px] text-[#6E6D74] leading-tight mt-0.5">Subir logo</span>
              </button>
            )}
          </div>

          <div className="flex-1 min-w-[190px]">
            <span className="block text-[12px] font-medium text-[#3F3F46] mb-1.5">
              Color de tienda
            </span>
            <div className="flex items-center gap-2">
              {THEME_COLORS.map((col) => {
                const isSelected = (themeColor?.id || 'pine') === col.id;
                return (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => setThemeColor(col)}
                    title={col.name}
                    aria-label={`Color ${col.name}`}
                    aria-pressed={isSelected}
                    style={{
                      backgroundColor: col.hex,
                      borderColor: col.borderHex || 'transparent',
                    }}
                    className={`w-[25px] h-[25px] rounded-full border flex items-center justify-center transition-transform duration-200 ease-expo cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-offset-2 ring-[#14151A] scale-105'
                        : 'hover:scale-105'
                    }`}
                  >
                    {isSelected && (
                      <Check
                        className="w-3 h-3"
                        style={{ color: col.textHex }}
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="product-name-input" className="block text-[12px] font-medium text-[#3F3F46] mb-1">
            Nombre del producto
          </label>
          <input
            id="product-name-input"
            ref={productInputRef}
            type="text"
            value={productName}
            onFocus={() => setActiveStep(3)}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Ej. Café de Especialidad 500g"
            className="w-full px-3 py-1.5 text-[13.5px] font-medium text-[#14151A] bg-white border border-[#DCD9D2] rounded-lg focus:border-[#156563] focus:outline-none focus:ring-2 focus:ring-[#156563]/15 transition-colors placeholder:text-[#9A9891]"
          />
        </div>

        <div>
          <span className="block text-[12px] font-medium text-[#3F3F46] mb-1">
            Foto del producto
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div
              role="button"
              tabIndex={0}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              className={`sm:flex-1 h-[38px] sm:h-[46px] rounded-lg border border-dashed flex sm:flex-col items-center justify-center gap-2 sm:gap-0 px-3 cursor-pointer transition-colors duration-200 ease-expo ${
                isDragging
                  ? 'border-[#156563] bg-[#EEF6F5]'
                  : 'border-[#D5D1C9] hover:border-[#156563] bg-[#FAFAF9]'
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => e.target.files?.[0] && uploadProductFile(e.target.files[0])}
                accept="image/*"
                className="hidden"
              />
              <Upload className="w-3.5 h-3.5 text-[#52525B]" aria-hidden="true" />
              <span className="text-[11.5px] sm:text-[11px] font-medium text-[#52525B] sm:mt-0.5">
                Arrastra tu foto
              </span>
            </div>

            <div className="grid grid-cols-4 sm:flex items-center gap-1.5 shrink-0">
              {PHOTO_PRESETS.map((preset) => {
                const isSelected =
                  productImage === preset.previewImageUrl ||
                  productImage === preset.imageUrl;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => applyPhotoPreset(preset)}
                    title={preset.label}
                    aria-label={`Usar foto de ejemplo: ${preset.label}`}
                    className={`w-full sm:w-[42px] h-[42px] sm:h-[46px] rounded-lg overflow-hidden border-2 transition-colors duration-200 ease-expo cursor-pointer shrink-0 bg-[#F3F1ED] ${
                      isSelected
                        ? 'border-[#156563]'
                        : 'border-[#E6E4DF] hover:border-[#ADA79C]'
                    }`}
                  >
                    <img
                      src={preset.imageUrl}
                      alt={preset.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="product-price-input" className="block text-[12px] font-medium text-[#3F3F46] mb-1">
            Precio
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-[13.5px] font-medium text-[#52525B] pointer-events-none">
              $
            </span>
            <input
              id="product-price-input"
              ref={priceInputRef}
              type="text"
              inputMode="numeric"
              value={productPrice === 0 ? '' : productPrice}
              onFocus={() => setActiveStep(4)}
              onChange={(e) => setProductPriceFromInput(e.target.value)}
              placeholder="280"
              className="w-full pl-6 pr-12 py-1.5 text-[13.5px] font-semibold text-[#14151A] tabular-nums bg-white border border-[#DCD9D2] rounded-lg focus:border-[#156563] focus:outline-none focus:ring-2 focus:ring-[#156563]/15 transition-colors"
            />
            <span className="absolute right-3 text-[12px] font-medium text-[#6E6D74] pointer-events-none">
              MXN
            </span>
          </div>
        </div>

        <button
          id="publicar-cta"
          type="button"
          onClick={openPublishModal}
          className="w-full py-2.5 px-4 bg-[#156563] hover:bg-[#104E4D] active:scale-[0.99] text-white text-[13.5px] font-semibold rounded-lg transition-colors duration-200 ease-expo cursor-pointer"
        >
          Publicar esta tienda por $99 MXN/mes
        </button>
      </div>
    </div>
  );
}
