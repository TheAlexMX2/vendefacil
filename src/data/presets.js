export const THEME_COLORS = [
  { id: 'black', name: 'Negro elegante', hex: '#18181B', bgClass: 'bg-zinc-900', borderClass: 'border-zinc-900', shadowClass: 'shadow-zinc-900/30' },
  { id: 'blue', name: 'Azul confianza', hex: '#2563EB', bgClass: 'bg-blue-600', borderClass: 'border-blue-600', shadowClass: 'shadow-blue-600/30' },
  { id: 'emerald', name: 'Verde esmeralda', hex: '#059669', bgClass: 'bg-emerald-600', borderClass: 'border-emerald-600', shadowClass: 'shadow-emerald-600/30' },
  { id: 'pink', name: 'Rosa chic', hex: '#EC4899', bgClass: 'bg-pink-500', borderClass: 'border-pink-500', shadowClass: 'shadow-pink-500/30' },
  { id: 'orange', name: 'Naranja vibrante', hex: '#EA580C', bgClass: 'bg-orange-600', borderClass: 'border-orange-600', shadowClass: 'shadow-orange-600/30' },
  { id: 'violet', name: 'Violeta moderno', hex: '#7C3AED', bgClass: 'bg-brand-600', borderClass: 'border-brand-600', shadowClass: 'shadow-brand-600/30' },
];

export const PRODUCT_PRESETS = [
  {
    id: 'cafe',
    name: 'Café Don Pedro',
    productName: 'Café de Especialidad 500g',
    price: 280,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop&q=80',
    category: 'Gastronomía',
    badge: 'Más Vendido',
    themeColor: THEME_COLORS[4], // Naranja / Ámbar
  },
  {
    id: 'moda',
    name: 'Aura Streetwear',
    productName: 'Playera Boxy Fit Oversize',
    price: 450,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
    category: 'Moda Urbana',
    badge: 'Tendencia',
    themeColor: THEME_COLORS[0], // Negro elegante
  },
  {
    id: 'hogar',
    name: 'Lumina Studio',
    productName: 'Vela Botánica Soja & Lavanda',
    price: 320,
    imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
    category: 'Hogar & Spa',
    badge: 'Artesanal',
    themeColor: THEME_COLORS[2], // Verde esmeralda
  },
];

export const DEFAULT_STORE = {
  brandName: 'Aura Moda',
  brandLogo: null,
  themeColor: THEME_COLORS[0], // Negro elegante por defecto para look chic
  productName: 'Playera Boxy Fit Oversize',
  productPrice: 450,
  productImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
  description: '100% algodón pesado de 240 GSM. Corte holgado contemporáneo con costuras reforzadas.',
};
