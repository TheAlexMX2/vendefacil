import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Globe,
  CreditCard,
  Mail,
  User,
  KeyRound,
  Copy,
  Check,
} from 'lucide-react';
import { slugifyBrand } from '../utils/formatters.js';

export default function PublishModal({ isOpen, onClose, storeState }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [useMagicLink, setUseMagicLink] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const brandSlug = slugifyBrand(storeState.brandName);
  const storeUrl = `https://${brandSlug}.vendefacil.online`;

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setIsProcessing(false);
      setCopiedUrl(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleCopyUrl = () => {
    navigator.clipboard?.writeText(storeUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="publish-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14151A]/55 backdrop-blur-sm"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-modal border border-[#E6E4DF] p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#52525B] hover:text-[#14151A] hover:bg-[#F3F1ED] rounded-lg transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-4 text-center space-y-5">
            <div className="w-14 h-14 bg-[#EEF6F5] text-[#156563] rounded-2xl flex items-center justify-center mx-auto border border-[#D6ECEA]">
              <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
            </div>

            <div>
              <h3 id="publish-modal-title" className="text-[22px] font-bold text-[#14151A] tracking-[-0.015em]">
                Tu tienda de prueba está lista
              </h3>
              <p className="text-[14px] text-[#4B4B52] mt-1">
                Activamos tu subdominio y guardamos tu producto inicial.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFAF9] border border-[#E6E4DF] text-left">
              <span className="text-[11px] font-semibold text-[#6E6D74] uppercase tracking-wider block mb-1.5">
                Enlace de tu tienda
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-[#14151A] text-[13.5px] truncate">
                  {storeUrl}
                </span>
                <button
                  type="button"
                  onClick={handleCopyUrl}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#D5D1C9] bg-white hover:border-[#14151A] text-[12px] font-semibold text-[#14151A] shrink-0 cursor-pointer transition-colors"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#156563]" aria-hidden="true" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 bg-[#FAF9F7] rounded-xl border border-[#E6E4DF] text-[13px] text-[#4B4B52] text-left">
              Enviamos el enlace de acceso a tu panel al correo{' '}
              <strong className="text-[#14151A] font-semibold">{email || 'indicado'}</strong>.
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-[#156563] hover:bg-[#104E4D] text-white font-semibold text-[14px] rounded-lg transition-colors cursor-pointer"
            >
              Volver a la tienda de muestra
            </button>
          </div>
        ) : (
          <form onSubmit={handleCheckout} className="space-y-4">
            <div className="pr-8">
              <h3 id="publish-modal-title" className="text-[22px] font-bold text-[#14151A] tracking-[-0.015em]">
                Publicar “{storeState.brandName || 'Mi Tienda'}”
              </h3>
              <p className="text-[13.5px] text-[#4B4B52] mt-1">
                Crea tu acceso para administrar pedidos, catálogo y Mercado Pago.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-[#E6E4DF] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-8 h-8 rounded-lg bg-[#EEF6F5] text-[#156563] flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <span className="font-semibold text-[#14151A] text-[13px] block truncate">
                    {brandSlug}.vendefacil.online
                  </span>
                  <span className="text-[#6E6D74] text-[12px]">Plan Lite · Cancela cuando quieras</span>
                </div>
              </div>
              <span className="font-bold text-[#14151A] text-[13.5px] tabular-nums shrink-0">
                $99 MXN/mes
              </span>
            </div>

            <div className="space-y-3.5">
              <div>
                <label htmlFor="publish-fullname" className="block text-[12.5px] font-medium text-[#14151A] mb-1">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6D74]" aria-hidden="true" />
                  <input
                    id="publish-fullname"
                    type="text"
                    required
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Sofía Mendoza"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DCD9D2] rounded-lg text-[14px] text-[#14151A] focus:outline-none focus:border-[#156563] focus:ring-2 focus:ring-[#156563]/15 transition-colors placeholder:text-[#9A9891]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="publish-email" className="block text-[12.5px] font-medium text-[#14151A] mb-1">
                  Correo electrónico (para pedidos y acceso)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6D74]" aria-hidden="true" />
                  <input
                    id="publish-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sofia@mitienda.com"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DCD9D2] rounded-lg text-[14px] text-[#14151A] focus:outline-none focus:border-[#156563] focus:ring-2 focus:ring-[#156563]/15 transition-colors placeholder:text-[#9A9891]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="publish-password" className="text-[12.5px] font-medium text-[#14151A]">
                    Contraseña de acceso al panel
                  </label>
                  <button
                    type="button"
                    onClick={() => setUseMagicLink(!useMagicLink)}
                    className="text-[12px] font-medium text-[#156563] hover:underline cursor-pointer"
                  >
                    {useMagicLink ? 'Usar contraseña' : 'Entrar con enlace al correo'}
                  </button>
                </div>

                {useMagicLink ? (
                  <div className="p-3 bg-[#EEF6F5] rounded-lg border border-[#D6ECEA] text-[12.5px] text-[#104E4D] flex items-start gap-2">
                    <Mail className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Te enviaremos un enlace de un clic a tu correo cada vez que quieras abrir tu panel, sin recordar contraseñas.
                    </span>
                  </div>
                ) : (
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6D74]" aria-hidden="true" />
                    <input
                      id="publish-password"
                      type="password"
                      required={!useMagicLink}
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mínimo 8 caracteres"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DCD9D2] rounded-lg text-[14px] text-[#14151A] focus:outline-none focus:border-[#156563] focus:ring-2 focus:ring-[#156563]/15 transition-colors placeholder:text-[#9A9891]"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 px-5 bg-[#156563] hover:bg-[#104E4D] text-white font-semibold text-[14px] rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isProcessing ? (
                  <span>Conectando con Mercado Pago...</span>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" aria-hidden="true" />
                    <span>Pagar $99 MXN con Mercado Pago</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-[#6E6D74]">
                <ShieldCheck className="w-4 h-4 text-[#156563]" aria-hidden="true" />
                <span>Transacción cifrada · Cancela cuando quieras</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
