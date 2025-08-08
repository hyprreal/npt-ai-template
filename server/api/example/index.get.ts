export default defineEventHandler(async (event) => {
  return [
    {
      id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Item 1'
    },
    {
      id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      name: 'Item 2'
    }
  ]
})
