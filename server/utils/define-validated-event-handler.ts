import type { H3Event, H3EventContext } from 'h3'
import type { z, ZodType } from 'zod'

type ValidatedEvent<S extends ZodType> = H3Event & {
  context: H3EventContext & {
    validated: {
      body: z.infer<S>
    }
  }
}

export default function defineValidatedEventHandler<S extends ZodType>(
  schema: S,
  handler: (event: ValidatedEvent<S>) => any,
) {
  return defineEventHandler(async (event) => {
    const result = await readValidatedBody(event, schema.safeParse)
    if (result.error) {
      setResponseStatus(event, 422)
      return {
        success: false,
        errors: result.error,
      }
    }
    event.context.validated = {
      body: result.data,
    }

    return handler(event as ValidatedEvent<S>)
  })
}
