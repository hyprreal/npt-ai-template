import { z } from 'zod'

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  STRIPE_SECRET_KEY: z.string(),
  STRIPE_PUBLISHABLE_KEY: z.string(),
  STRIPE_PRICING_TABLE_ID: z.string(),
  OPENAI_API_KEY: z.string(),
})

export type EnvSchema = z.infer<typeof EnvSchema>
// eslint-disable-next-line node/prefer-global/process
export default EnvSchema.parse(process.env)
