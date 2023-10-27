/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //apps content
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    //packages content
    '../../packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
