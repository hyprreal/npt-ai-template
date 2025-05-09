import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  experimental: {
    viewTransition: true,
  },
  runtimeConfig: {
    // databaseUrl: process.env.DATABASE_URL,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/devtools',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  image: {},
  // $production: {
  //   routeRules: {
  //   },
  // },
})
