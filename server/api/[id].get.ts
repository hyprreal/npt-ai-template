import { eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { item } from '@/server/db/schema'

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString as string)
const db = drizzle(client)

export default defineEventHandler(async (event) => {
  const itemId = getRouterParam(event, 'id')

  return db
    .select()
    .from(item)
    .where(eq(item.id, itemId as string))
})
