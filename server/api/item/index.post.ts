// import { serverSupabaseUser } from '#supabase/server'
import { item } from '~/supabase/schema'
import { db } from '~/server/utils/db-connection'
import { handleDatabaseError } from '~/server/utils/db-error-handler'

export default defineEventHandler(async (event) => {
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
