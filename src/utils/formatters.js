/**
 * Convierte un nombre de marca en un slug válido para subdominio:
 * - Todo en minúsculas
 * - Elimina acentos y diacríticos
 * - Reemplaza o elimina espacios y caracteres especiales
 * - Solo caracteres a-z y 0-9
 * Ej: "Mis Zapatos Bonitos!" -> "miszapatosbonitos"
 */
export function slugifyBrand(name) {
  if (!name || typeof name !== 'string') return 'tu-tienda';
  
  const clean = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quita acentos
    .replace(/[^a-z0-9]/g, '')       // Solo letras y números
    .trim();

  return clean.length > 0 ? clean : 'tu-tienda';
}

/**
 * Formatea un valor numérico a moneda mexicana (MXN):
 * Ej: 350 -> "$350 MXN"
 */
export function formatMXN(val) {
  const num = typeof val === 'number' ? val : parseFloat(val);
  if (isNaN(num)) return '$0 MXN';

  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(num) + ' MXN';
}
