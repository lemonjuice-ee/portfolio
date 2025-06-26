/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ee0000",       // Primary red
          darktop: "#000000",   // Deep black/gray
          lightbg: "#f8f8f8",   // Soft white bg
          accent: "#cc0000",    // Accent red (buttons/hover)
          dark: "#111111", 
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.2)', opacity: '0.6' },
        },
        'pulse-slower': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.4)', opacity: '0.5' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-in forwards',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'pulse-slower': 'pulse-slower 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
