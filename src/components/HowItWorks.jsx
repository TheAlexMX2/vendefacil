import React from 'react';
import { Palette, Link2, Share2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Diseña tu tienda aquí mismo',
      description: 'Elige tu nombre, sube tu producto estrella y define tu precio en menos de 60 segundos con nuestro editor interactivo.',
      badge: 'Cero Código',
      icon: Palette,
      highlight: 'Sin plantillas confusas',
    },
    {
      number: '02',
      title: 'Conecta Mercado Pago con un clic',
      description: 'Vincula tu cuenta de Mercado Pago autorizando con tu usuario. Sin claves de API complejas, certificados raros ni programadores.',
      badge: '100% Seguro',
      icon: Link2,
      highlight: 'Dinero directo a tu banco',
    },
    {
      number: '03',
      title: 'Comparte tu enlace y recibe pedidos',
      description: 'Pega tu enlace en Instagram, TikTok o WhatsApp. Tus clientes te compran al instante y recibes avisos de ventas en tu teléfono.',
      badge: 'Vende 24/7',
      icon: Share2,
      highlight: 'Catálogo de hasta 10 productos',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-3">
            <span>Sencillo, Veloz y Rentable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Cómo Funciona VendeFácil en 3 Pasos
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Olvídate de semanas de configuración o plataformas costosas que se quedan con parte de tus ganancias.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card-hover hover:border-brand-300 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
              >
                {/* Step Number Background */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-slate-100 group-hover:text-brand-100 transition-colors font-mono">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold text-[11px]">
                    {step.badge}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight pill */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt to scroll back to editor */}
        <div className="mt-12 text-center">
          <a
            href="#creador"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 hover:underline"
          >
            <span>Pruébalo ahora en el editor arriba</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
