import { create } from 'zustand';
import { DEFAULT_STORE } from '../data/presets.js';
import { useUIStore } from './useUIStore.js';

let buyTimeoutId = null;
let exampleTimeoutId = null;

export const useBuilderStore = create((set) => ({
  ...DEFAULT_STORE,
  activeStep: 1,
  isDragging: false,
  cartCount: 0,
  boughtSuccess: false,
  recentlyLoadedExampleId: null,

  setActiveStep: (activeStep) => set({ activeStep }),
  setIsDragging: (isDragging) => set({ isDragging }),

  setBrandName: (brandName) =>
    set({
      brandName,
      activeStep: 1,
    }),

  clearBrandLogo: () => set({ brandLogo: null }),

  uploadLogoFile: (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    set({ activeStep: 2 });
    const reader = new FileReader();
    reader.onload = (event) => {
      set({ brandLogo: event.target?.result || null });
    };
    reader.readAsDataURL(file);
  },

  setThemeColor: (themeColor) =>
    set({
      themeColor,
      activeStep: 2,
    }),

  setProductName: (productName) =>
    set({
      productName,
      activeStep: 3,
    }),

  setProductPriceFromInput: (rawInput) => {
    const rawVal = String(rawInput).replace(/[^0-9]/g, '');
    const num = rawVal === '' ? 0 : parseInt(rawVal, 10);
    set({
      productPrice: num,
      activeStep: 4,
    });
  },

  uploadProductFile: (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    set({ activeStep: 3 });
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        set({ productImage: event.target.result });
      }
    };
    reader.readAsDataURL(file);
  },

  applyPhotoPreset: (preset) =>
    set({
      activeStep: 3,
      productImage: preset.previewImageUrl,
      productName: preset.productName,
      productPrice: preset.price,
    }),

  loadExample: (example) => {
    clearTimeout(exampleTimeoutId);
    set({
      brandName: example.name,
      brandLogo: null,
      themeColor: example.themeColor || DEFAULT_STORE.themeColor,
      categoryTitle: example.category || DEFAULT_STORE.categoryTitle,
      productName: example.productName,
      productPrice: example.price,
      productImage: example.imageUrl,
      heroImage: example.heroImageUrl || example.imageUrl,
      secondaryProduct: example.secondaryProduct || null,
      recentlyLoadedExampleId: example.id,
    });

    useUIStore
      .getState()
      .showToast(`Tienda “${example.name}” cargada en el editor.`);

    exampleTimeoutId = setTimeout(() => {
      set({ recentlyLoadedExampleId: null });
    }, 2500);

    if (typeof document !== 'undefined') {
      const creatorElement = document.getElementById('creador');
      if (creatorElement) {
        creatorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  },

  simulateBuy: () => {
    clearTimeout(buyTimeoutId);
    set((state) => ({
      boughtSuccess: true,
      cartCount: state.cartCount + 1,
    }));
    buyTimeoutId = setTimeout(() => {
      set({ boughtSuccess: false });
    }, 2000);
  },
}));
