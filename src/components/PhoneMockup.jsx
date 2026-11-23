import React, { useState } from 'react';
import { Search, ShoppingBag, Check } from 'lucide-react';
import { formatMXN } from '../utils/formatters.js';

export default function PhoneMockup({ storeState }) {
  const [cartCount, setCartCount] = useState(0);
  const [boughtSuccess, setBoughtSuccess] = useState(false);

  const displayBrand = storeState.brandName.trim() || 'Mi Tienda';
  const displayProduct = storeState.productName.trim() || 'Producto Estrella';
  const displayPrice = storeState.productPrice > 0 ? storeState.productPrice : 0;
  const themeHex = storeState.themeColor?.hex || '#156563';
  const themeTextHex = storeState.themeColor?.textHex || '#FFFFFF';
  const heroSrc = storeState.heroImage || storeState.productImage;
  const secondary = storeState.secondaryProduct;

  const handleSimulatedBuy = () => {
    setBoughtSuccess(true);
    setCartCount((c) => c + 1);
    setTimeout(() => setBoughtSuccess(false), 2000);
  };

  return (
    <div className="w-[248px] sm:w-[258px] bg-[#16171C] rounded-[34px] p-[7px] shadow-phone border border-[#2D2F38] flex flex-col">
      <div className="bg-white rounded-[28px] overflow-hidden flex flex-col">
        <div className="pt-1.5 pb-1 bg-white flex justify-center shrink-0">
          <div className="w-[70px] h-[14px] bg-[#16171C] rounded-full" aria-hidden="true" />
        </div>

        <div className="px-3 py-1.5 border-b border-[#EFECE6] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            {storeState.brandLogo && (
              <img
                src={storeState.brandLogo}
                alt={displayBrand}
                className="w-4 h-4 object-contain rounded shrink-0"
              />
            )}
            <span className="text-[12px] font-bold text-[#14151A] tracking-[-0.01em] truncate">
              {displayBrand}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#14151A] shrink-0">
            <Search className="w-3.5 h-3.5 text-[#52525B]" strokeWidth={1.75} aria-hidden="true" />
            <div className="relative">
              <ShoppingBag className="w-3.5 h-3.5 text-[#14151A]" strokeWidth={1.75} aria-hidden="true" />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full text-[9px] font-bold flex items-center justify-center tabular-nums transition-colors duration-200 ease-expo"
                  style={{ backgroundColor: themeHex, color: themeTextHex }}
                >
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="relative h-[126px] bg-[#181615] overflow-hidden shrink-0">
          <img
            src={heroSrc}
            alt={`Portada de ${displayBrand}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 flex items-center justify-center px-3">
            <span className="text-[16px] font-semibold text-white text-center leading-tight tracking-[-0.01em] drop-shadow-sm break-words">
              {displayBrand}
            </span>
          </div>
        </div>

        <div className="p-2.5 flex flex-col bg-white">
          <p className="text-[11.5px] font-bold text-[#14151A] mb-1.5 truncate">
            {storeState.categoryTitle || 'Catálogo destacado'}
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-[#F3F1ED] border border-[#ECEAE4]">
                <img
                  src={storeState.productImage}
                  alt={displayProduct}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-1 text-[10px] font-medium text-[#14151A] leading-tight line-clamp-2 min-h-[2.4em]">
                {displayProduct}
              </p>
              <p className="mt-0.5 text-[10.5px] font-bold text-[#14151A] tabular-nums">
                {formatMXN(displayPrice)}
              </p>
            </div>

            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-[#F3F1ED] border border-[#ECEAE4]">
                <img
                  src={secondary?.imageUrl || storeState.productImage}
                  alt={secondary?.name || 'Segundo producto'}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-1 text-[10px] font-medium text-[#14151A] leading-tight line-clamp-2 min-h-[2.4em]">
                {secondary?.name || 'Edición Especial 250g'}
              </p>
              <p className="mt-0.5 text-[10.5px] font-bold text-[#14151A] tabular-nums">
                {formatMXN(secondary?.price ?? displayPrice)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSimulatedBuy}
            style={{
              backgroundColor: boughtSuccess ? '#147A5C' : themeHex,
              color: boughtSuccess ? '#FFFFFF' : themeTextHex,
            }}
            className="mt-2 w-full py-2 px-2.5 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors duration-300 ease-expo cursor-pointer"
          >
            {boughtSuccess ? (
              <>
                <Check className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                <span>Pedido de prueba listo</span>
              </>
            ) : (
              <span>Comprar con Mercado Pago</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
