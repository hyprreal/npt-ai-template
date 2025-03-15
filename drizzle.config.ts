import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './supabase/schema/schema.ts',
  out: './supabase/migrations',
  dbCredentials: {
    url: process.env.LOCAL_DATABASE_URL as string,
  },
})
