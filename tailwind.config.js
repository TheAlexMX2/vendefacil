/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF6F5',
          100: '#D6ECEA',
          200: '#AED9D5',
          500: '#1D7A77',
          600: '#156563',
          700: '#104E4D',
          800: '#0D3F3E',
          900: '#0A3130',
        },
        ground: {
          DEFAULT: '#F6F4F1',
          subtle: '#EFECE6',
          muted: '#E6E2DA',
        },
        ink: {
          DEFAULT: '#14151A',
          secondary: '#4B4B52',
          muted: '#6E6D74',
        },
        line: {
          DEFAULT: '#E6E4DF',
          strong: '#D5D1C9',
        },
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        builder: '0 18px 42px -18px rgba(20, 21, 26, 0.12), 0 2px 6px rgba(20, 21, 26, 0.04)',
        phone: '0 24px 48px -16px rgba(20, 21, 26, 0.24), 0 4px 12px rgba(20, 21, 26, 0.08)',
        modal: '0 28px 60px -20px rgba(20, 21, 26, 0.26), 0 4px 16px rgba(20, 21, 26, 0.08)',
      },
    },
  },
  plugins: [],
}
