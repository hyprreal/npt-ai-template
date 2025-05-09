import { defineConfig } from 'drizzle-kit'
import env from './lib/env'

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema/schema',
  out: './db/migrations',
  dbCredentials: {
    url: env.LOCAL_DATABASE_URL,
  },
})
