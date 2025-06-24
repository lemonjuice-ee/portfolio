/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ee0000",       // Primary red
          darktop: "#111111",   // Deep black/gray
          lightbg: "#f8f8f8",   // Soft white bg
          accent: "#cc0000",    // Accent red (buttons/hover)
          dark: "#1A1A1A", 
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
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-in forwards',
      },
    },
  },
  plugins: [],
}
