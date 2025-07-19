import type { auth } from './auth'
import { inferAdditionalFields, usernameClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/vue'

export const authClient = createAuthClient({
  baseURL: 'http://localhost:3000',
  plugins: [
    inferAdditionalFields<typeof auth>(),
    usernameClient(),
  ],
})
