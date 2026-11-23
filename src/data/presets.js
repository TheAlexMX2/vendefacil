import phoneHeroPhoto from '../../assets/plates/phone-hero-photo.png';
import phoneProduct1Photo from '../../assets/plates/phone-product-1-photo.png';
import phoneProduct2Photo from '../../assets/plates/phone-product-2-photo.png';
import presetThumb1 from '../../assets/plates/preset-thumb-1.png';
import presetThumb2 from '../../assets/plates/preset-thumb-2.png';
import presetThumb3 from '../../assets/plates/preset-thumb-3.png';
import presetThumb4 from '../../assets/plates/preset-thumb-4.png';
import auraModaPhoto from '../../assets/stores/aura-moda.png';
import luminaStudioPhoto from '../../assets/stores/lumina-studio.png';

export const THEME_COLORS = [
  { id: 'pine', name: 'Verde pino', hex: '#156563', textHex: '#FFFFFF' },
  { id: 'ink', name: 'Marino tinta', hex: '#1C2434', textHex: '#FFFFFF' },
  { id: 'emerald', name: 'Verde bosque', hex: '#147A5C', textHex: '#FFFFFF' },
  { id: 'sand', name: 'Piedra cálida', hex: '#E8E2D8', textHex: '#14151A', borderHex: '#D5CFC4' },
  { id: 'slate', name: 'Azul pizarra', hex: '#3B627E', textHex: '#FFFFFF' },
  { id: 'espresso', name: 'Café tostado', hex: '#6B4B3A', textHex: '#FFFFFF' },
];

export const PHOTO_PRESETS = [
  {
    id: 'preset-bag',
    label: 'Bolsa de café 500g',
    imageUrl: presetThumb1,
    previewImageUrl: phoneProduct1Photo,
    productName: 'Café de Especialidad 500g',
    price: 280,
  },
  {
    id: 'preset-beans',
    label: 'Grano tostado de altura',
    imageUrl: presetThumb2,
    previewImageUrl: phoneProduct2Photo,
    productName: 'Café de Altura 500g',
    price: 280,
  },
  {
    id: 'preset-iced',
    label: 'Bebida fría artesanal',
    imageUrl: presetThumb3,
    previewImageUrl: presetThumb3,
    productName: 'Cold Brew de Olla 355ml',
    price: 195,
  },
  {
    id: 'preset-pastry',
    label: 'Repostería y caja regalo',
    imageUrl: presetThumb4,
    previewImageUrl: presetThumb4,
    productName: 'Caja Desayuno & Café',
    price: 340,
  },
];

export const PRODUCT_PRESETS = [
  {
    id: 'cafedonpedro',
    name: 'Café Don Pedro',
    category: 'Café de Especialidad',
    productName: 'Café de Especialidad 500g',
    price: 280,
    imageUrl: phoneProduct1Photo,
    heroImageUrl: phoneHeroPhoto,
    secondaryProduct: {
      name: 'Café de Altura 500g',
      price: 280,
      imageUrl: phoneProduct2Photo,
    },
    themeColor: THEME_COLORS[0],
    summary: 'Tostador independiente con envíos locales y cobro directo en línea.',
  },
  {
    id: 'auramoda',
    name: 'Aura Moda',
    category: 'Moda Independiente',
    productName: 'Blusa Lino Natural',
    price: 450,
    imageUrl: auraModaPhoto,
    heroImageUrl: auraModaPhoto,
    secondaryProduct: {
      name: 'Camisa Algodón Orgánico',
      price: 590,
      imageUrl: auraModaPhoto,
    },
    themeColor: THEME_COLORS[1],
    summary: 'Colección cápsula de textiles ligeros lista para vender desde Instagram.',
  },
  {
    id: 'luminastudio',
    name: 'Lumina Studio',
    category: 'Hogar y Velas',
    productName: 'Vela Botánica Soja & Lavanda',
    price: 320,
    imageUrl: luminaStudioPhoto,
    heroImageUrl: luminaStudioPhoto,
    secondaryProduct: {
      name: 'Vela Ámbar & Cedro 240g',
      price: 360,
      imageUrl: luminaStudioPhoto,
    },
    themeColor: THEME_COLORS[5],
    summary: 'Taller artesanal de velas en pequeños lotes con pedidos por WhatsApp.',
  },
];

export const DEFAULT_STORE = {
  brandName: 'Café Don Pedro',
  brandLogo: null,
  themeColor: THEME_COLORS[0],
  categoryTitle: 'Café de Especialidad',
  productName: 'Café de Especialidad 500g',
  productPrice: 280,
  productImage: phoneProduct1Photo,
  heroImage: phoneHeroPhoto,
  secondaryProduct: PRODUCT_PRESETS[0].secondaryProduct,
};
