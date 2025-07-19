import type { H3Event, H3EventContext } from 'h3'
import type { z, ZodType } from 'zod'
import { auth } from '~~/lib/auth'

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
    const session = await auth.api.getSession({
      headers: event.headers,
    })

    if (!session || !session.user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized.',
      })
    }

    const result = await readValidatedBody(event, schema.safeParse)

    if (result.error) {
      setResponseStatus(event, 422)

      const statusMessage = result
        .error
        .issues
        .map(issue => `${issue.path.join('')}: ${issue.message}`)
        .join('; ')

      return {
        success: false,
        errors: statusMessage,
      }
    }

    event.context.validated = {
      user: session.user,
      body: result.data,
    }

    return handler(event as ValidatedEvent<S>)
  })
}
