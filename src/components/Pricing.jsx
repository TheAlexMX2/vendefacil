import React from 'react';
import { Check, ArrowRight, Globe } from 'lucide-react';
import { useUIStore } from '../stores/useUIStore.js';

export default function Pricing() {
  const openPublishModal = useUIStore((s) => s.openPublishModal);

  const features = [
    'Subdominio gratuito e inmediato (tu-marca.vendefacil.online)',
    'Catálogo de hasta 10 productos estrella listo para redes sociales',
    'Almacenamiento de imágenes optimizado automáticamente en WebP',
    'Integración directa con Mercado Pago (tarjeta, OXXO y transferencia)',
    '0% de comisiones de plataforma sobre tus ventas',
    'Notificaciones automáticas de nuevos pedidos por WhatsApp',
    'Certificado de seguridad SSL (HTTPS) incluido',
    'Panel de control claro desde celular o computadora',
  ];

  return (
    <section id="precios" className="py-20 lg:py-24 bg-[#F3F1ED]">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
        <div className="max-w-[580px] mb-12">
          <h2 className="text-[30px] sm:text-[36px] font-bold tracking-[-0.025em] leading-[1.15] text-[#14151A]">
            Un solo plan. Sin letras chiquitas.
          </h2>
          <p className="mt-3 text-[16px] text-[#4B4B52] leading-relaxed">
            Pagas una cuota mensual fija y conservas el 100% de tus ventas directo en tu cuenta de Mercado Pago.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E6E4DF] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#FAF9F7] border-b lg:border-b-0 lg:border-r border-[#E6E4DF] flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] font-bold text-[#14151A]">Plan Lite</h3>
              <p className="mt-1 text-[14px] text-[#4B4B52]">
                Todo lo necesario para lanzar y cobrar en línea hoy.
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-[52px] font-bold tracking-[-0.03em] leading-none text-[#14151A] tabular-nums">
                  $99
                </span>
                <span className="text-[16px] font-medium text-[#52525B]">
                  MXN / mes
                </span>
              </div>

              <p className="mt-4 text-[13.5px] text-[#4B4B52]">
                Cancela cuando quieras con un clic. Sin contratos forzosos.
              </p>

              <button
                type="button"
                onClick={openPublishModal}
                className="mt-7 w-full py-3.5 px-5 bg-[#156563] hover:bg-[#104E4D] text-white text-[15px] font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Comenzar ahora por $99 MXN</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E6E4DF] flex items-start gap-2.5 text-[12.5px] text-[#52525B] leading-relaxed">
              <Globe className="w-4 h-4 text-[#156563] shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                <strong className="font-semibold text-[#14151A]">
                  ¿Quieres tu propio dominio .com?
                </strong>{' '}
                Cómpralo desde tu panel o conecta el que ya tienes cuando estés listo.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#6E6D74] mb-4">
              Incluido desde el primer minuto
            </h4>

            <ul className="divide-y divide-[#F0EEE9]">
              {features.map((feat) => (
                <li key={feat} className="py-3 flex items-start gap-3 text-[14.5px] text-[#14151A]">
                  <Check
                    className="w-4 h-4 text-[#156563] shrink-0 mt-1"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
