import React from 'react';
import StoreBuilderCard from './StoreBuilderCard.jsx';
import TrustBar from './TrustBar.jsx';

export default function Hero({ storeState, setStoreState, onPublishClick, children }) {
  return (
    <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 bg-[#F6F4F1]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-[780px] mx-auto">
          <h1
            className="text-[26px] sm:text-[40px] lg:text-[45px] font-bold text-[#14151A] tracking-[-0.025em] leading-[1.11]"
            style={{ textWrap: 'balance' }}
          >
            Tu tienda en línea lista para vender.
            <br className="hidden sm:inline" /> Sin código, sin comisiones.
          </h1>

          <p className="mt-2 sm:mt-2.5 text-[14px] sm:text-[18.5px] text-[#3F3F46] font-normal leading-snug">
            $99 MXN al mes · Cobra directo con Mercado Pago
          </p>
        </div>

        <div className="mt-4 sm:mt-5 max-w-[890px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center gap-5 sm:gap-6">
          <div className="w-full lg:w-[604px] shrink-0">
            <StoreBuilderCard
              storeState={storeState}
              setStoreState={setStoreState}
              onPublishClick={onPublishClick}
            />
          </div>

          <div className="w-full lg:w-[260px] shrink-0 flex justify-center">
            {children}
          </div>
        </div>

        <TrustBar />
      </div>
    </section>
  );
}
