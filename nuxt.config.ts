// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'app',
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    './app/app.css',
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            'satoshi': ['Satoshi-Variable', 'sans-serif'],
            'satoshi-italic': ['Satoshi-VariableItalic', 'sans-serif'],
          },
        },
      },
    }
  }
})
