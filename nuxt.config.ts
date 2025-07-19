import tailwindcss from '@tailwindcss/vite'
import env from './lib/env'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  experimental: {
    viewTransition: true,
  },
  runtimeConfig: {
    public: {
      baseUrl: env.NODE_ENV === 'production'
        ? 'http://localhost:3000'
        : 'http://localhost:3000',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/devtools',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    'nuxt-csurf',
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
  routeRules: {
    '/api/auth/**': { csurf: false }, // only better-auth handles these routes, mitigating conflicts
  },
  // },
})
