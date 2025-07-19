import {
  boolean,
  index,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  created_at: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  full_name: text('full_name').notNull(),
  email: text('email').notNull().unique(),
  email_verified: boolean('email_verified').default(false),
  avatar_url: text('avatar_url'),
  username: text('username').notNull().unique(),
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull(),
}, table => [
  index('user_email_idx').on(table.email),
  index('user_username_idx').on(table.username),
])
