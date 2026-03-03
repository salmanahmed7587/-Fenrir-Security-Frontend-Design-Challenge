/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#0CC8A8',
          hover: '#0ab396',
          muted: 'rgba(12,200,168,0.15)',
        },
        severity: {
          critical: '#EF4444',
          'critical-bg': 'rgba(239,68,68,0.15)',
          high: '#F97316',
          'high-bg': 'rgba(249,115,22,0.15)',
          medium: '#EAB308',
          'medium-bg': 'rgba(234,179,8,0.15)',
          low: '#22C55E',
          'low-bg': 'rgba(34,197,94,0.15)',
        },
        dark: {
          50: '#2A2A2A',
          100: '#242424',
          200: '#1E1E1E',
          300: '#1A1A1A',
          400: '#141414',
          500: '#0F0F0F',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
