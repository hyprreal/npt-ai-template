import { sql } from 'drizzle-orm'
import {
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'
import { user } from '../user'

export const user_session = pgTable('user_session', {
  id: uuid('id').primaryKey().defaultRandom(),
  created_at: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => sql`now()`)
    .notNull(),
  expires_at: timestamp('expires_at', { withTimezone: true }).notNull(),
  token: text('token').notNull().unique(),
  ip_address: text('ip_address'),
  user_agent: text('user_agent'),
  user_id: uuid('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
})
