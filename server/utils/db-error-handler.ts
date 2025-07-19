export function handleDatabaseError(error: unknown) {
  let code: string

  if (error && typeof error === 'object' && 'code' in error) {
    code = String(error.code)
  }
  else {
    return { statusMessage: 'An unexpected error occurred', statusCode: 500 }
  }

  switch (code) {
    case '23505': // Unique violation
      return {
        statusMessage: 'A record with this information already exists',
        statusCode: 409,
      }
    case '23503': // Foreign key violation
      return {
        statusMessage: 'Referenced information does not exist',
        statusCode: 400,
      }
    case '23514': // Check constraint violation
      return {
        statusMessage: 'Input data does not meet requirements',
        statusCode: 422,
      }
    case '57014': // Query timeout
      return {
        statusMessage: 'The operation timed out, please try again',
        statusCode: 504,
      }
    default:
      return {
        statusMessage: 'Something went wrong, please try again',
        statusCode: 500,
      }
  }
}
