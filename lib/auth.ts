import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { APIError } from 'better-auth/api'
import { createAuthMiddleware, username } from 'better-auth/plugins'
import { user_account, user_session, user_verification } from '~~/db/schema/auth'
import { user } from '~~/db/schema/user'
import { db } from '~~/server/utils/db-connection'

// We have to provide our own email sending service
export const auth = betterAuth({
  appName: 'nuxt-4-app',
  baseURL: useRuntimeConfig().public.baseUrl,
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
  plugins: [
    username({
      minUsernameLength: 3,
      maxUsernameLength: 30,
      schema: {
        user: {
          fields: {
            username: 'username',
            displayUsername: 'display_username',
          },
        },
      },
    }),
  ],
  emailAndPassword: {
    enabled: true,
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
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      // only run when the client hits POST /sign-up/email
      if (ctx.path !== '/sign-up/email')
        return

      const { username } = ctx.body ?? {}
      if (!username?.trim()) {
        throw new APIError('BAD_REQUEST', {
          message: 'username is required',
        })
      }
    }),
  },
  socialProviders: {
    // google: {},
    // apple: {
    //   clientId: process.env.APPLE_CLIENT_ID,
    //   clientSecret: process.env.APPLE_CLIENT_SECRET,
    // },
  },
  account: {
    modelName: 'user_account',
    fields: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      accountId: 'account_id',
      providerId: 'provider_id',
      userId: 'user_id',
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
      idToken: 'id_token',
      accessTokenExpiresAt: 'access_token_expires_at',
      refreshTokenExpiresAt: 'refresh_token_expires_at',
      password: 'password',
    },
  },
  session: {
    modelName: 'user_session',
    fields: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      expiresAt: 'expires_at',
      ipAddress: 'ip_address',
      userAgent: 'user_agent',
      userId: 'user_id',
    },
  },
  user: {
    fields: {
      email: 'email',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      name: 'full_name',
      emailVerified: 'email_verified',
      image: 'avatar_url',
    },
    additionalFields: {
      first_name: {
        type: 'string',
        input: true,
      },
      last_name: {
        type: 'string',
        input: true,
      },
      display_name: {
        type: 'string',
        input: true,
      },
      deleted_at: {
        type: 'date',
        input: false,
      },
    },
  },
  verification: {
    modelName: 'user_verification',
    fields: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      expiresAt: 'expires_at',
    },
  },
})
