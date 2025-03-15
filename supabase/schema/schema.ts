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
})
