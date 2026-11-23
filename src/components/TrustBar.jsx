import React from 'react';
import { CreditCard, BadgePercent, Lock, MessageCircle } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: CreditCard, label: 'Mercado Pago integrado' },
    { icon: BadgePercent, label: '0% comisiones' },
    { icon: Lock, label: 'SSL 256-bit' },
    { icon: MessageCircle, label: 'Notificaciones WhatsApp' },
  ];

  return (
    <div className="max-w-[890px] mx-auto mt-5 sm:mt-6 pt-4 border-t border-[#E4E0D8]">
      <ul className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-x-6 gap-y-2.5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex items-center gap-2 text-[13.5px] font-medium text-[#14151A]">
              <Icon className="w-[17px] h-[17px] text-[#78716C] shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
