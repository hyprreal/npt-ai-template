/**
 * Frontend type for an Item record.
 * Purpose: shared shape used in components/composables for items returned by server APIs.
 * Keep in sync with the corresponding DB schema (drizzle) and API serializers.
 */
export interface Item {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  description: string
  is_private: boolean
}
