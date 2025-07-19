import { sql } from 'drizzle-orm'
import {
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const user_verification = pgTable('user_verification', {
  id: uuid('id').primaryKey().defaultRandom(),
  created_at: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => sql`now()`)
    .notNull(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expires_at: timestamp('expires_at', { withTimezone: true }).notNull(),
})
