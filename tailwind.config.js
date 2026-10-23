/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bifao: {
          dark: '#070A0F',
          darker: '#04060A',
          card: '#0E1420',
          cardHover: '#131C2D',
          border: '#1B2436',
          borderLight: '#2A3650',
          navy: '#0B1B3D',
          blue: '#0E3D99',
          blueLight: '#1D5FD3',
          yellow: '#FFCC00',
          yellowHover: '#E5B800',
          red: '#DC2626',
          redLight: '#EF4444',
          gray: '#94A3B8',
          grayLight: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.12em',
      }
    },
  },
  plugins: [],
}
