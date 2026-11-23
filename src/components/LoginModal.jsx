import React, { useState, useEffect } from 'react';
import { X, Lock, Mail, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setIsLoading(false);
      setResetSent(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1400);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14151A]/55 backdrop-blur-sm"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-modal border border-[#E6E4DF] p-6 sm:p-7 z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 id="login-modal-title" className="font-bold text-[#14151A] text-[20px] tracking-[-0.015em]">
              Iniciar sesión
            </h3>
            <p className="text-[13px] text-[#4B4B52] mt-0.5">
              Panel de control de tu tienda VendeFácil
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#52525B] hover:text-[#14151A] hover:bg-[#F3F1ED] rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 bg-[#EEF6F5] text-[#156563] rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <h4 className="text-[17px] font-bold text-[#14151A]">Acceso verificado</h4>
            <p className="text-[13.5px] text-[#4B4B52] mt-1">
              Abriendo el panel de tu tienda...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-[12.5px] font-medium text-[#14151A] mb-1">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6D74]" aria-hidden="true" />
                <input
                  id="login-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@mitienda.com"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DCD9D2] rounded-lg text-[14px] text-[#14151A] focus:outline-none focus:border-[#156563] focus:ring-2 focus:ring-[#156563]/15 transition-colors placeholder:text-[#9A9891]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="login-password" className="text-[12.5px] font-medium text-[#14151A]">
                  Contraseña
                </label>
                <button
                  type="button"
                  onClick={() => setResetSent(true)}
                  className="text-[12px] font-medium text-[#156563] hover:underline cursor-pointer"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6D74]" aria-hidden="true" />
                <input
                  id="login-password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DCD9D2] rounded-lg text-[14px] text-[#14151A] focus:outline-none focus:border-[#156563] focus:ring-2 focus:ring-[#156563]/15 transition-colors placeholder:text-[#9A9891]"
                />
              </div>
              {resetSent && (
                <p className="mt-2 text-[12px] text-[#156563] bg-[#EEF6F5] px-3 py-2 rounded-lg border border-[#D6ECEA]">
                  Escribe tu correo arriba y enviaremos un enlace para restablecer tu acceso.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-[#156563] hover:bg-[#104E4D] text-white font-semibold text-[14px] rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <span>Entrando...</span>
              ) : (
                <>
                  <span>Entrar a mi tienda</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>

            <div className="pt-1 flex items-center justify-center gap-1.5 text-[12px] text-[#6E6D74]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#156563]" aria-hidden="true" />
              <span>Conexión cifrada SSL de 256 bits</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
