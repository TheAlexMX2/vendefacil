import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  CreditCard,
  Mail,
  User,
  KeyRound,
  ExternalLink
} from 'lucide-react';
import { slugifyBrand, formatMXN } from '../utils/formatters.js';

export default function PublishModal({ isOpen, onClose, storeState }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [useMagicLink, setUseMagicLink] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const brandSlug = slugifyBrand(storeState.brandName);
  const storeUrl = `https://${brandSlug}.vendefacil.online`;

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
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Decorative background glow */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="py-6 text-center animate-fadeIn space-y-5">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
              <Sparkles className="w-10 h-10 animate-bounce" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                ¡PAGO CONFIRMADO VÍA MERCADO PAGO!
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                ¡Tu tienda está lista y publicada!
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Hemos activado tu subdominio seguro y configurado tu primer producto.
              </p>
            </div>

            {/* Generated URL Box */}
            <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-left">
              <span className="text-[11px] font-semibold text-brand-700 uppercase tracking-wider block mb-1">
                Tu tienda pública en vivo:
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert(`Abriendo tu tienda de prueba en ${storeUrl}`); }}
                  className="font-mono font-bold text-brand-900 text-sm hover:underline truncate"
                >
                  {storeUrl}
                </a>
                <span className="px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-bold shrink-0">
                  ACTIVA
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-600 text-left space-y-1.5">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Credenciales de acceso listas:</span>
              </div>
              <p>Te hemos enviado la confirmación y acceso directo a tu panel en <strong className="text-slate-800">{email || 'tu correo'}</strong>.</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-600/30 transition-all cursor-pointer"
            >
              Entrar al Panel de Control de VendeFácil
            </button>
          </div>
        ) : (
          /* CHECKOUT FORM */
          <form onSubmit={handleCheckout} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Paso Final • Publicación Inmediata</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Publicar "{storeState.brandName || 'Mi Tienda'}"
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Crea tus credenciales de acceso para gestionar pedidos e inventario.
              </p>
            </div>

            {/* Store Preview Summary Card */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-700 font-bold flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="font-mono font-bold text-slate-900 block truncate">
                    {brandSlug}.vendefacil.online
                  </span>
                  <span className="text-slate-400 text-[11px]">Plan Lite: $99 MXN / mes</span>
                </div>
              </div>
              <span className="font-bold text-brand-700 bg-brand-100/60 px-2.5 py-1 rounded-md text-xs shrink-0">
                $99 MXN
              </span>
            </div>

            {/* User Form Inputs */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Sofía Mendoza"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Correo Electrónico (para notificaciones de pedidos)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sofia@mitienda.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Password or Magic Link */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Contraseña de Acceso al Panel
                  </label>
                  <button
                    type="button"
                    onClick={() => setUseMagicLink(!useMagicLink)}
                    className="text-xs text-brand-600 hover:underline"
                  >
                    {useMagicLink ? 'Prefiero usar contraseña' : '¿Sin contraseña? Enlace Mágico'}
                  </button>
                </div>

                {useMagicLink ? (
                  <div className="p-3 bg-brand-50/70 rounded-xl border border-brand-200/70 text-xs text-brand-800">
                    🪄 Te enviaremos un <strong>enlace mágico seguro</strong> a tu correo cada vez que quieras entrar a tu panel de control, sin tener que recordar contraseñas.
                  </div>
                ) : (
                  <div className="relative">
                    <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="password"
                      required={!useMagicLink}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mínimo 8 caracteres"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all placeholder:text-slate-400"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Total and Mercado Pago CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-6 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-600/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Conectando con Mercado Pago...</span>
                  </div>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>Pagar $99 MXN con Mercado Pago</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Transacción encriptada • Cancela cuando quieras</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
