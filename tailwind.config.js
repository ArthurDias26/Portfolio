/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito: ["Nunito", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"]
        
      },
      colors:{
        darkBlue: "#1b2b5f",
        blue: "#3533cd",
        purple: "#8a5db2",
        lightYellow: "#fde59e"
      },
       screens:{
        tbxl: '1160px',
        tbsm: '920px',
        mbxl : '680px',
        mbsm : '520px'
       }
    },
  },
  plugins: [],
}


