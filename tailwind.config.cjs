/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography';

export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi-Variable', 'sans-serif'],
        'satoshi-italic': ['Satoshi-VariableItalic', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindTypography],
}

