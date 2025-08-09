import { eq } from 'drizzle-orm'
import { item } from '~~/db/schema/example/index.example'

export default defineEventHandler(async (event) => {
  return db
    .delete(item)
    .where(eq(item.id, getRouterParam(event, 'id') as string))
})
