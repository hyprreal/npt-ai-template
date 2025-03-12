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
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    // '@nuxtjs/supabase'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {},
  // supabase: {},
  // $production: {
  //   routeRules: {
  //     '/signin': { prerender: true },
  //     '/signup': { prerender: true },
  //     '/forgot-password': { prerender: true },
  //     '/reset-password': { prerender: true },
  //   },
  //   scripts: {
  //     registry: {
  //       googleTagManager: {
  //         id: 'GTM-',
  //       },
  //     },
  //   },
  // },
})
