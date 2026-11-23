import { create } from 'zustand';

let toastTimeoutId = null;
let publishCheckoutTimeoutId = null;
let copyUrlTimeoutId = null;
let loginTimeoutId = null;
let loginCloseTimeoutId = null;

export const useUIStore = create((set) => ({
  activeModal: null, // 'publish' | 'login' | 'legal' | null
  activeLegalDoc: null,
  mobileMenuOpen: false,
  toastMessage: null,

  publishForm: {
    fullName: '',
    email: '',
    password: '',
    useMagicLink: false,
  },
  publishStatus: {
    isProcessing: false,
    isSuccess: false,
    copiedUrl: false,
  },

  loginForm: {
    email: '',
    password: '',
  },
  loginStatus: {
    isLoading: false,
    isSuccess: false,
    resetSent: false,
  },

  setMobileMenuOpen: (isOpen) => set({ mobileMenuOpen: isOpen }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

  openPublishModal: () => {
    clearTimeout(publishCheckoutTimeoutId);
    clearTimeout(copyUrlTimeoutId);
    set({
      activeModal: 'publish',
      mobileMenuOpen: false,
      publishStatus: {
        isProcessing: false,
        isSuccess: false,
        copiedUrl: false,
      },
    });
  },

  openLoginModal: () => {
    clearTimeout(loginTimeoutId);
    clearTimeout(loginCloseTimeoutId);
    set({
      activeModal: 'login',
      mobileMenuOpen: false,
      loginStatus: {
        isLoading: false,
        isSuccess: false,
        resetSent: false,
      },
    });
  },

  openLegalModal: (doc) =>
    set({
      activeModal: 'legal',
      activeLegalDoc: doc,
    }),

  closeModal: () => {
    clearTimeout(publishCheckoutTimeoutId);
    clearTimeout(copyUrlTimeoutId);
    clearTimeout(loginTimeoutId);
    clearTimeout(loginCloseTimeoutId);
    set({
      activeModal: null,
      activeLegalDoc: null,
    });
  },

  showToast: (message, duration = 3200) => {
    clearTimeout(toastTimeoutId);
    set({ toastMessage: message });
    toastTimeoutId = setTimeout(() => {
      set({ toastMessage: null });
    }, duration);
  },

  updatePublishForm: (patch) =>
    set((state) => ({
      publishForm: { ...state.publishForm, ...patch },
    })),

  toggleMagicLink: () =>
    set((state) => ({
      publishForm: {
        ...state.publishForm,
        useMagicLink: !state.publishForm.useMagicLink,
      },
    })),

  submitPublishCheckout: () => {
    clearTimeout(publishCheckoutTimeoutId);
    set((state) => ({
      publishStatus: { ...state.publishStatus, isProcessing: true },
    }));
    publishCheckoutTimeoutId = setTimeout(() => {
      set((state) => ({
        publishStatus: {
          ...state.publishStatus,
          isProcessing: false,
          isSuccess: true,
        },
      }));
    }, 900);
  },

  copyStoreUrl: (storeUrl) => {
    navigator.clipboard?.writeText(storeUrl);
    clearTimeout(copyUrlTimeoutId);
    set((state) => ({
      publishStatus: { ...state.publishStatus, copiedUrl: true },
    }));
    copyUrlTimeoutId = setTimeout(() => {
      set((state) => ({
        publishStatus: { ...state.publishStatus, copiedUrl: false },
      }));
    }, 2000);
  },

  updateLoginForm: (patch) =>
    set((state) => ({
      loginForm: { ...state.loginForm, ...patch },
    })),

  requestPasswordReset: () =>
    set((state) => ({
      loginStatus: { ...state.loginStatus, resetSent: true },
    })),

  submitLogin: () => {
    clearTimeout(loginTimeoutId);
    clearTimeout(loginCloseTimeoutId);
    set((state) => ({
      loginStatus: { ...state.loginStatus, isLoading: true },
    }));
    loginTimeoutId = setTimeout(() => {
      set((state) => ({
        loginStatus: {
          ...state.loginStatus,
          isLoading: false,
          isSuccess: true,
        },
      }));
      loginCloseTimeoutId = setTimeout(() => {
        set((state) => ({
          activeModal: state.activeModal === 'login' ? null : state.activeModal,
          loginStatus: { ...state.loginStatus, isSuccess: false },
        }));
      }, 1400);
    }, 700);
  },
}));

if (typeof window !== 'undefined') {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && useUIStore.getState().activeModal !== null) {
      useUIStore.getState().closeModal();
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });
  }
}
