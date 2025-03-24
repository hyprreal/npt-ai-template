export default defineEventHandler(async (event) => {
  setResponseStatus(event, 404, 'Resource not found')

  return {
    status: 404,
    message: 'Resource not found',
  }
})
