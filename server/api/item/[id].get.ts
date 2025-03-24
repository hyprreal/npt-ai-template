import { eq } from 'drizzle-orm'
import { item } from '~/supabase/schema'
import { db } from '~/server/utils/db-connection'

export default defineEventHandler(async (event) => {
  const itemId = getRouterParam(event, 'id')

  return db
    .select()
    .from(item)
    .where(eq(item.id, itemId as string))
})
