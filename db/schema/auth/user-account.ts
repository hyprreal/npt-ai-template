import {
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'
import { user } from '../user'

export const user_account = pgTable('user_account', {
  id: uuid('id').primaryKey().defaultRandom(),
  created_at: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  account_id: text('account_id').notNull(),
  provider_id: text('provider_id').notNull(),
  user_id: uuid('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  access_token: text('access_token'),
  refresh_token: text('refresh_token'),
  id_token: text('id_token'),
  access_token_expires_at: timestamp('access_token_expires_at', { withTimezone: true }),
  refresh_token_expires_at: timestamp('refresh_token_expires_at', { withTimezone: true }),
  scope: text('scope'),
  password: text('password'),
})
