import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString as string)
const db = drizzle(client)

export default defineEventHandler(async (event) => {
  return [
    {
      id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Item 1'
    },
    {
      id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Item 2'
    }
  ]
})
