import { eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
// import { serverSupabaseUser } from '#supabase/server'
import { profile } from '@/server/db/schema'

const connectionString = process.env.DATABASE_URL
const client = postgres(connectionString as string)
const db = drizzle(client)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // const user = await serverSupabaseUser(event)

  // if (!user && !body.user) {
  //   throw createError({
  //     statusCode: 401,
  //     statusMessage: 'Unauthorized.',
  //   })
  // }

  const userId = body.user.id

  const getProfile = await db
    .select()
    .from(profile)
    .where(eq(profile.id, userId))

  return getProfile[0]
})
