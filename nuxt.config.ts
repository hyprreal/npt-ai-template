import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    // '@nuxtjs/supabase'
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  experimental: {
    viewTransition: true,
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  // supabase: {},
  image: {},
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
