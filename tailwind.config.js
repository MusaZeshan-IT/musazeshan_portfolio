/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom screen sizes
        '2xs': '360px',
        '2xs-custom': '420px',
        'xs': '480px',
        'xs-custom': '560px',
        'sm-custom': '704px',
        'md-custom': '896px',
        'lg-custom': '1152px',
        'xl-custom': '1408px',
      },
    },
  },
  plugins: [],
}
