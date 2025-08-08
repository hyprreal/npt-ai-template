/**
 * Example Drizzle ORM schema for an "item" table.
 * Purpose: serves as a template/reference for defining Postgres tables with
 * drizzle-orm/pg-core (primary key, timestamps, index, and a CHECK constraint).
 * Usage: copy/rename into your own schema module (e.g. db/schema/<feature>/index.ts),
 * adjust fields, and wire it into Drizzle config/migrations if you plan to use it.
 * This example is not enabled by default and can be removed if unused.
 */
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

export const item = pgTable('item', {
  id: uuid('id').primaryKey().defaultRandom(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  is_private: boolean('is_private').notNull(),
}, table => [
  index('item_name_idx').on(table.name),
  check(
    'item_description_length',
    sql`LENGTH(${table.description}) <= 2200`,
  ),
])
