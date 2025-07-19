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
