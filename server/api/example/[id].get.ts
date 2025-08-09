import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { item } from '~~/db/schema/example/index.example'

export default defineEventHandler(async (event) => {
  const itemId = getRouterParam(event, 'id') as string
  if (!z.string().safeParse(itemId).success) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Invalid item id',
    })
  }

  return db
    .select()
    .from(item)
    .where(eq(item.id, itemId as string))
})
