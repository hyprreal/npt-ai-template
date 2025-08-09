import { item } from '~~/db/schema/example/index.example'

export default defineEventHandler(async () => {
  await db
    .select()
    .from(item)

  return db || []
})
