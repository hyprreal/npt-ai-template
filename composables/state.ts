import { useStorage } from '@vueuse/core'

export const useBanner = () => useStorage<boolean>('banner', () => true)
