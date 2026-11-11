import React from 'react';
import { ShoppingBag, Heart, MessageCircle, Mail, Shield, CheckCircle } from 'lucide-react';

export default function Footer() {
  const handleLegalClick = (docTitle) => (e) => {
    e.preventDefault();
    alert(`Documento Legal: ${docTitle}\n\nVendeFácil cumple con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México) y normativas de comercio electrónico.`);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold shadow-md shadow-brand-600/30">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Vende<span className="text-brand-400">Fácil</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              La plataforma de creación de tiendas en línea más rápida y económica para emprendedores en México y América Latina. Sin código ni comisiones sorpresa.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Sistemas operando al 100%
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegación</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#creador" className="hover:text-white transition-colors">Creador en Vivo</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">Cómo Funciona</a>
              </li>
              <li>
                <a href="#precios" className="hover:text-white transition-colors">Plan Lite ($99 MXN)</a>
              </li>
              <li>
                <a href="#ejemplos" className="hover:text-white transition-colors">Tiendas de Ejemplo</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal y Seguridad</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#privacidad" onClick={handleLegalClick('Aviso de Privacidad')} className="hover:text-white transition-colors">
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a href="#terminos" onClick={handleLegalClick('Términos y Condiciones del Servicio')} className="hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#reembolsos" onClick={handleLegalClick('Política de Reembolsos y Cancelaciones')} className="hover:text-white transition-colors">
                  Garantía y Reembolsos
                </a>
              </li>
              <li>
                <a href="#seguridad" onClick={handleLegalClick('Seguridad de Pagos Mercado Pago')} className="hover:text-white transition-colors">
                  Seguridad y Cifrado SSL
                </a>
              </li>
            </ul>
          </div>

          {/* Support and Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Soporte y Contacto</h4>
            <p className="text-xs text-slate-400">
              ¿Dudas para configurar tu tienda? Te ayudamos con gusto:
            </p>
            <div className="space-y-2 pt-1 text-sm">
              <a
                href="https://wa.me/525500000000?text=Hola,%20tengo%20dudas%20sobre%20VendeFácil"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 hover:bg-emerald-900/80 transition-colors text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp de Soporte</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>hola@vendefacil.online</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} VendeFácil Technologies México. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para emprendedores que quieren vender sin complicaciones</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
