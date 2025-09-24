module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        forge: '0 0 10px rgba(228,87,46,0.7)',
        forgeWhite: '0 0 6px rgba(255,255,255,0.5)'
      }
    },
  },
  plugins: [],
}
