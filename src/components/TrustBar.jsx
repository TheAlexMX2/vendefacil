import React from 'react';
import { ShieldCheck, Zap, CreditCard, Lock, Sparkles, MessageCircle } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: CreditCard,
      title: 'Mercado Pago Integrado',
      desc: 'Cobra con tarjeta, OXXO y transferencia directa',
    },
    {
      icon: ShieldCheck,
      title: '0% Comisiones de Plataforma',
      desc: 'Nosotros no retenemos ni un centavo de tus ventas',
    },
    {
      icon: Lock,
      title: 'Cifrado SSL 256-bit',
      desc: 'Tu tienda y pagos completamente blindados',
    },
    {
      icon: MessageCircle,
      title: 'Notificaciones WhatsApp',
      desc: 'Recibe alertas instantáneas en cada pedido',
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle heading */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
          Tecnología de pago y comercio segura diseñada para emprendedores en México
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-brand-200 hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
