import React from 'react';
import { Mail, MessageCircle, X } from 'lucide-react';
import { useUIStore } from '../stores/useUIStore.js';

const LEGAL_DOCS = {
  privacidad: {
    title: 'Aviso de privacidad',
    body: 'VendeFácil protege los datos personales y de contacto de comercios y compradores conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México). Los datos del constructor de muestra en esta página se procesan únicamente de manera local en tu navegador hasta que decides publicar.',
  },
  terminos: {
    title: 'Términos del servicio',
    body: 'El Plan Lite tiene una tarifa fija de $99 MXN al mes con capacidad para hasta 10 productos activos, subdominio .vendefacil.online e integración con Mercado Pago. VendeFácil no retiene comisiones por venta; aplican únicamente las comisiones estándar propias de tu cuenta en Mercado Pago.',
  },
  reembolsos: {
    title: 'Cancelaciones y reembolsos',
    body: 'No hay plazos forzosos ni penalizaciones. Puedes pausar o cancelar tu suscripción mensual en cualquier momento con un clic desde tu panel antes de la siguiente fecha de cobro.',
  },
  seguridad: {
    title: 'Seguridad y cifrado SSL',
    body: 'Todas las tiendas publicadas incluyen certificado HTTPS/SSL de 256 bits activo de forma automática y procesan los cobros directamente mediante el entorno oficial de Mercado Pago.',
  },
};

export default function Footer() {
  const activeDoc = useUIStore((s) =>
    s.activeModal === 'legal' ? s.activeLegalDoc : null
  );
  const openLegalModal = useUIStore((s) => s.openLegalModal);
  const closeModal = useUIStore((s) => s.closeModal);

  return (
    <footer className="bg-[#14151A] text-[#D4D2CC] pt-16 pb-10">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-md bg-white text-[#14151A] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
                  <path
                    d="M6 7.5L11.4 17.5H12.6L18 7.5"
                    stroke="#14151A"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.2 9.8L18.2 7.5"
                    stroke="#156563"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[18px] font-bold text-white tracking-[-0.02em]">
                VendeFácil
              </span>
            </div>
            <p className="text-[13.5px] text-[#A8A6A0] leading-relaxed max-w-[300px]">
              Tiendas en línea ligeras para emprendedores en México. Sin código y sin comisiones por venta.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white">
              Producto
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#A8A6A0]">
              <li>
                <a href="#creador" className="hover:text-white transition-colors">
                  Creador en vivo
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-white transition-colors">
                  Plan Lite ($99 MXN)
                </a>
              </li>
              <li>
                <a href="#ejemplos" className="hover:text-white transition-colors">
                  Ejemplos
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white">
              Legal y seguridad
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#A8A6A0]">
              <li>
                <button
                  type="button"
                  onClick={() => openLegalModal(LEGAL_DOCS.privacidad)}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Aviso de privacidad
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalModal(LEGAL_DOCS.terminos)}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Términos del servicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalModal(LEGAL_DOCS.reembolsos)}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Cancelaciones y reembolsos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openLegalModal(LEGAL_DOCS.seguridad)}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Seguridad y cifrado SSL
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white">
              Contacto
            </h4>
            <p className="text-[13px] text-[#A8A6A0] leading-relaxed">
              ¿Dudas para abrir tu tienda? Escríbenos directo en español:
            </p>
            <div className="space-y-2.5 pt-0.5 text-[13.5px]">
              <a
                href="https://wa.me/525500000000?text=Hola,%20tengo%20dudas%20sobre%20VendeF%C3%A1cil"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/15 text-white hover:bg-white/10 transition-colors text-[12.5px] font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#5CC4BF]" aria-hidden="true" />
                <span>WhatsApp de soporte</span>
              </a>
              <div className="flex items-center gap-2 text-[13px] text-[#A8A6A0]">
                <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>hola@vendefacil.online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-[#9A9891]">
          <p>© {new Date().getFullYear()} VendeFácil · México</p>
          <p>Pagos procesados directamente vía Mercado Pago.</p>
        </div>
      </div>

      {activeDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14151A]/60 backdrop-blur-sm"
        >
          <div className="absolute inset-0" onClick={closeModal} />
          <div className="relative z-10 w-full max-w-md bg-white text-[#14151A] rounded-2xl border border-[#E6E4DF] shadow-modal p-6">
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#E6E4DF]">
              <h3 id="legal-modal-title" className="text-[18px] font-bold">
                {activeDoc.title}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="p-1.5 rounded-lg text-[#52525B] hover:text-[#14151A] hover:bg-[#F3F1ED] cursor-pointer"
                aria-label="Cerrar aviso legal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-4 text-[14px] text-[#4B4B52] leading-relaxed">
              {activeDoc.body}
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 w-full py-2.5 bg-[#156563] hover:bg-[#104E4D] text-white text-[14px] font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
