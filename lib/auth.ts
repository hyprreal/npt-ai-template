import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { user_account, user_session, user_verification } from '~~/db/schema/auth'
import { user } from '~~/db/schema/user'
import { db } from '~~/server/utils/db-connection'
import env from './env'

export const auth = betterAuth({
  appName: 'npt.ai',
  trustedOrigins: [
    'http://localhost:3000',
  ],
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user_account,
      user,
      user_session,
      user_verification,
    },
  }),
  advanced: {
    database: { generateId: false },
    cookiePrefix: '',
  },
  plugins: [],
  emailAndPassword: {
    enabled: false,
    // requireEmailVerification: true,
    // sendResetPassword: async ({ user, url, token }, request) => {
    // await sendEmail({
    //   to: user.email,
    //   subject: 'Reset your password',
    //   text: `Click the link to reset your password: ${url}`,
    // })
    // },
  },
  emailVerification: {
    // sendVerificationEmail: async ({ user, url }) => {},
    // sendOnSignUp: true,
    // autoSignInAfterVerification: true,
    // expiresIn: 3600,
  },
  socialProviders: {
    google: {
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
    },
  },
})
