/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'SFPro-Round-Black': ['SFPro-Round-Black','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Bold': ['SFPro-Round-Bold','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Heavy': ['SFPro-Round-Heavy','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Light': ['SFPro-Round-Light','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Medium': ['SFPro-Round-Medium','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Regular': ['SFPro-Round-Regular','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Semibold': ['SFPro-Round-Semibold','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Thin': ['SFPro-Round-Thin','Helvetica Neue','Helvetica','Arial','sans-serif'],
      'SFPro-Round-Ultralight': ['SFPro-Round-Ultralight','Helvetica Neue','Helvetica','Arial','sans-serif'],
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
}