/**
 * Composables (Nuxt/Vue) are reusable functions, usually prefixed with "use",
 * that encapsulate reactive state and logic to be shared across components and
 * server routes. This example exposes a persisted `banner` boolean using
 * VueUse's useLocalStorage (backed by localStorage on the client).
 */
export const useBanner = () => useLocalStorage<boolean>('banner', true)
