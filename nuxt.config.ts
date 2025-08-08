import tailwindcss from '@tailwindcss/vite'
import env from './lib/env'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  experimental: {
    viewTransition: true,
  },
  runtimeConfig: {
    openaiApiKey: env.OPENAI_API_KEY,
    public: {},
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/devtools',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-csurf',
    '@nuxtjs/mdc',
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
  mdc: {},
  routeRules: {
    '/api/auth/**': { csurf: false }, // only better-auth handles these routes, mitigating conflicts
  },
})
