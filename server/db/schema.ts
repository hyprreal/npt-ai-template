import { sql } from 'drizzle-orm'
import {
  boolean,
  check,
  index,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const profile = pgTable('profile', {
  id: uuid('id').primaryKey().defaultRandom(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
  email: text('email').notNull().unique(),
  username: text('username').notNull().unique(),
  phone_number: text('phone_number').notNull().unique(),
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull(),
  date_of_birth: text('date_of_birth').notNull(),
  is_member: boolean('is_member').default(false),
}, table => [
  index('profile_email_idx').on(table.email),
  check('valid_username', sql`${table.username} ~* '^[a-zA-Z0-9]+$'`),
])

export const item = pgTable('item', {
  id: uuid('id').primaryKey().defaultRandom(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
  name: text('name').notNull(),
})
