/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: '#81d8f7',
        verdeDark: '#015f43',
        verde: '#00875f',
        verdeLight: '#00b37e',
        preto: '#09090a',
        pretoLight: '#121214',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-verde': '0 0 12px #00875f',
        'glow-verde-lg': '0 0 24px #00875f',
        'glow-azul': '0 0 16px #81d8f7',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'name-glow': 'animaNome 6s linear infinite',
      },
      keyframes: {
        animaNome: {
          '0%, 40%, 100%': { color: '#09090a' },
          '70%, 90%': { color: '#fefefe' },
        },
      },
    },
  },
  plugins: [],
}

