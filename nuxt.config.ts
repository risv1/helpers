// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  srcDir: 'app',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',

  ],
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    dbUrl: process.env.DB_URL,
    expireTime: process.env.EXPIRE_TIME
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      theme: {
        extend: {
          fontFamily: {
            'satoshi': ['Satoshi-Variable', 'sans-serif'],
            'satoshi-italic': ['Satoshi-VariableItalic', 'sans-serif'],
          },
        },
      },
    },
  }
})
