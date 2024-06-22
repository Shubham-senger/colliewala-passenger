module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        accent: '#17a2b8',
      },
      keyframes: {
        progressLineTransmission: {
          '0%': { width: '4%' },
          '100%': { width: '81.5%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        progressLineTransmission: 'progressLineTransmission 2.5s 0.3s ease-in-out both',
        float: 'float 3s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}
