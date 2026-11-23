import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { PRODUCT_PRESETS } from '../data/presets.js';
import { formatMXN, slugifyBrand } from '../utils/formatters.js';
import { useBuilderStore } from '../stores/useBuilderStore.js';

export default function StoreExamples() {
  const currentBrandName = useBuilderStore((s) => s.brandName);
  const recentlyLoadedExampleId = useBuilderStore((s) => s.recentlyLoadedExampleId);
  const loadExample = useBuilderStore((s) => s.loadExample);

  return (
    <section id="ejemplos" className="py-20 lg:py-24 bg-[#F6F4F1] border-t border-[#E6E4DF]">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
        <div className="max-w-[620px]">
          <h2 className="text-[30px] sm:text-[36px] font-bold tracking-[-0.025em] leading-[1.15] text-[#14151A]">
            Explora cómo se adapta a distintos rubros
          </h2>
          <p className="mt-3 text-[16px] text-[#4B4B52] leading-relaxed">
            Ejemplos interactivos de muestra: carga cualquiera en el editor superior para probar su subdominio, color y producto en el teléfono.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_PRESETS.map((item) => {
            const isLoaded =
              recentlyLoadedExampleId === item.id || currentBrandName === item.name;
            const slug = slugifyBrand(item.name);

            return (
              <article key={item.id} className="flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#E6E2DA] border border-[#E2DED6]">
                    <img
                      src={item.imageUrl}
                      alt={`${item.name} — ${item.productName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[18px] font-bold text-[#14151A] tracking-[-0.01em]">
                      {item.name}
                    </h3>

                    <p className="mt-0.5 text-[12.5px] font-medium text-[#6E6D74]">
                      {item.category} · {slug}.vendefacil.online
                    </p>

                    <p className="mt-2 text-[13.5px] text-[#4B4B52] leading-snug">
                      {item.summary}
                    </p>

                    <p className="mt-2.5 text-[13.5px] font-semibold text-[#14151A] tabular-nums">
                      {item.productName} · {formatMXN(item.price)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => loadExample(item)}
                  className={`mt-4 w-full py-2.5 px-3.5 rounded-lg text-[13px] font-semibold border transition-colors duration-200 ease-expo flex items-center justify-center gap-1.5 cursor-pointer ${
                    isLoaded
                      ? 'bg-[#156563] text-white border-[#156563]'
                      : 'bg-white text-[#14151A] border-[#D5D1C9] hover:border-[#14151A]'
                  }`}
                >
                  {isLoaded ? (
                    <>
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                      <span>Cargado en el editor</span>
                    </>
                  ) : (
                    <>
                      <span>Probar en el editor</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
