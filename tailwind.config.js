/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      "sm":{"max":"630px"},
      "md-min":{"min":"990px"},
      "md":{"max":"990px"},
      "lg":{"max":"1279px"},
      "xlg":{'max':"1500px"}

    }
    
  },
  plugins: [],
  
}

