import React from 'react';
import { ExternalLink, Sparkles, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { PRODUCT_PRESETS } from '../data/presets.js';

export default function StoreExamples({ onLoadExample }) {
  return (
    <section id="ejemplos" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos de Éxito en Vivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Emprendedores Reales Vendiendo con VendeFácil
          </h2>
          <p className="text-base text-slate-600">
            Inspírate en tiendas creadas en minutos por emprendedores en México.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRODUCT_PRESETS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-800 shadow-sm">
                  {item.category}
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-brand-600 text-white text-[10px] font-bold">
                  {item.badge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-brand-600 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                      {item.id}.vendefacil.online
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-500 mb-4">
                    Producto estrella: <strong className="text-slate-700">{item.productName}</strong> por ${item.price} MXN
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onLoadExample(item)}
                  className="w-full py-2.5 px-4 bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-700 border border-slate-200 hover:border-brand-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Cargar en el editor para probar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
