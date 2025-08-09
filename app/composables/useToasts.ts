/**
 * Composables (Nuxt/Vue) are reusable functions, usually prefixed with "use",
 * that encapsulate reactive state and logic to be shared across components and
 * server routes.
 */
import type { Toast, ToastType } from '~/types/toast'

let _id = 0

export function useToasts() {
  // Global reactive state for all toasts
  const toasts = useState<Toast[]>('global-toasts', () => [])

  function remove(id: number) {
    const idx = toasts.value.findIndex(t => t.id === id)
    if (idx !== -1)
      toasts.value.splice(idx, 1)
  }

  function add(message: string, type: ToastType = 'info', durationMs = 5000) {
    const id = ++_id
    const toast: Toast = {
      id,
      type,
      message,
      createdAt: Date.now(),
    }
    toasts.value.push(toast)

    // Auto-remove
    if (durationMs > 0) {
      setTimeout(() => remove(id), durationMs)
    }
    return id
  }

  return { toasts, addToast: add, removeToast: remove }
}
