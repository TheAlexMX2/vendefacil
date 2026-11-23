import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Arma tu escaparate en vivo',
      description:
        'Escribe el nombre de tu marca, sube la foto de tu producto estrella y fija tu precio en pesos mexicanos. Tu subdominio .vendefacil.online queda listo al instante.',
    },
    {
      number: '2',
      title: 'Vincula Mercado Pago con tu cuenta',
      description:
        'Autoriza tu cuenta de Mercado Pago en un paso sin claves técnicas ni programadores. El dinero de cada compra llega directo a tu cuenta.',
    },
    {
      number: '3',
      title: 'Comparte tu enlace y recibe avisos',
      description:
        'Pon tu liga en Instagram, TikTok o WhatsApp. Cada vez que entra un pedido recibes notificación en tu celular y administras hasta 10 productos desde tu panel.',
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 lg:py-24 bg-white border-y border-[#E6E4DF]"
    >
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <h2 className="text-[30px] sm:text-[36px] font-bold tracking-[-0.025em] leading-[1.14] text-[#14151A]">
            De idea a tienda activa en tres pasos
          </h2>
          <p className="mt-4 text-[16px] text-[#4B4B52] leading-relaxed">
            Sin instalaciones, sin plantillas enredadas y sin entregar parte de cada venta. Arma tu catálogo, conecta tu cuenta y empieza a cobrar hoy.
          </p>
          <a
            href="#creador"
            className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#156563] hover:text-[#104E4D] hover:underline transition-colors"
          >
            <span>Probar ahora en el editor</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <ol className="lg:col-span-7 divide-y divide-[#E6E4DF] border-t border-b border-[#E6E4DF]">
          {steps.map((step) => (
            <li key={step.number} className="py-7 flex gap-5 items-start">
              <span className="w-7 h-7 rounded-full border border-[#D5D1C9] text-[12px] font-semibold text-[#14151A] tabular-nums flex items-center justify-center shrink-0 mt-0.5 bg-[#FAFAF9]">
                {step.number}
              </span>
              <div>
                <h3 className="text-[18px] font-bold text-[#14151A] tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] text-[#4B4B52] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
