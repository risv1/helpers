// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  srcDir: 'app',
  modules: [
    '@nuxt/icon',
  ],
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    dbUrl: process.env.DB_URL,
    expireTime: process.env.EXPIRE_TIME
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})