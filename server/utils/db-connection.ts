import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import env from '~~/lib/env'

const connectionString = env.DATABASE_URL
const client = postgres(connectionString)
export const db = drizzle(client, {
  // Useful for debugging database interactions during local development.
  // Uncomment the logger below to log all SQL queries and parameters.
  // Kept off by default to avoid inundating logs.
  // logger: {
  //   logQuery: (query, params) => {
  //     console.log('🔍 QUERY:', query, '-- params:', params)
  //   },
  // },
})
