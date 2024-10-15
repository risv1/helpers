// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'app',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
  runtimeConfig: {
    public: {
      jwtSecret: process.env.JWT_SECRET,
      dbUrl: process.env.DB_URL,
      expireTime: process.env.EXPIRE_TIME
    }
  },
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
