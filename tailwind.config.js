module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#181A58',
        secondary: '#1e293b'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}