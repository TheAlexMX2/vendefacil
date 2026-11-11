import React from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Globe, 
  Zap,
  Image,
  CreditCard,
  Percent
} from 'lucide-react';

export default function Pricing({ onPublishClick }) {
  const features = [
    { text: 'Subdominio gratuito e inmediato (tu-marca.vendefacil.online)', strong: true },
    { text: 'Catálogo de hasta 10 productos estrella (ideal para comenzar)', strong: true },
    { text: 'Almacenamiento de imágenes optimizado (WebP & CDN de alta velocidad)', strong: false },
    { text: 'Integración directa con Mercado Pago (el dinero va directo a tu cuenta)', strong: true },
    { text: '0% comisiones ocultas por venta (solo la tarifa estándar del procesador)', strong: true },
    { text: 'Notificaciones automáticas de nuevos pedidos por WhatsApp', strong: false },
    { text: 'Certificado de seguridad SSL (https) para máxima confianza', strong: false },
    { text: 'Panel de control intuitivo optimizado para celular y laptop', strong: false },
  ];

  return (
    <section id="precios" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3 border border-emerald-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Precios 100% Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Un Solo Plan. Todo Incluido. Sin Letras Chiquitas.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Comienza a vender hoy por una fracción de lo que cuesta un café. Sin contratos forzosos.
          </p>
        </div>

        {/* Single Column Pricing Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-brand-500/80 shadow-2xl shadow-brand-500/10 relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-600 to-brand-700 text-white font-bold text-xs px-5 py-1.5 rounded-bl-2xl tracking-wide uppercase flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PLAN LITE • MÁS POPULAR</span>
            </div>

            {/* Plan Info & Price */}
            <div className="mb-8 pt-2">
              <h3 className="text-2xl font-extrabold text-slate-900">Plan Lite</h3>
              <p className="text-slate-500 text-sm mt-1">
                Todo lo que necesitas para lanzar y validar tu tienda en línea hoy.
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight font-mono">
                  $99
                </span>
                <span className="text-xl font-bold text-slate-500">MXN</span>
                <span className="text-sm font-medium text-slate-400">/ mes</span>
                
                {/* Friction-reduction Badge */}
                <div className="w-full mt-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/70">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cancela cuando quieras con 1 clic • Sin plazos forzosos</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3.5 mb-8 pb-8 border-b border-slate-100">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Lo que obtienes inmediatamente:
              </p>
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className={feat.strong ? 'text-slate-900 font-semibold' : 'text-slate-600'}>
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtle Upsell Box */}
            <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex items-start gap-3">
              <Globe className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 font-bold block mb-0.5">
                  ¿Quieres tu propio dominio personalizado?
                </strong>
                Dominios <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">.com</code> o <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">.mx</code> disponibles directamente desde tu panel de control por solo $199 MXN/año cuando estés listo.
              </div>
            </div>

            {/* CTA Button with High-Contrast Emerald Green */}
            <button
              onClick={onPublishClick}
              className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Comenzar ahora por $99 MXN</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <p className="mt-3 text-center text-xs text-slate-400">
              Activación instantánea en menos de 2 minutos • Soporte en español
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
