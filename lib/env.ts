import { z } from 'zod'

const EnvSchema = z.object({
  LOCAL_DATABASE_URL: z.string(),
})

export type EnvSchema = z.infer<typeof EnvSchema>
// eslint-disable-next-line node/prefer-global/process
export default EnvSchema.parse(process.env)
