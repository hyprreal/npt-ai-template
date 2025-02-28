import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
// import { serverSupabaseUser } from '#supabase/server'
import { item } from '@/server/db/schema'
import { handleDatabaseError } from '@/server/utils/dbErrorHandler'

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString as string)
const db = drizzle(client)

export default defineEventHandler(async (event) => {
  // const user = await serverSupabaseUser(event)

  // if (!user) {
  //   throw createError({
  //     statusCode: 401,
  //     statusMessage: 'Unauthorized.',
  //   })
  // }

  const newItem = await readBody(event)

  try {
    await db
      .insert(item)
      .values(newItem)

    return null
  }
  catch (error) {
    const { statusMessage, statusCode } = handleDatabaseError(error)

    throw createError({
      statusCode,
      statusMessage,
    })
  }
})
