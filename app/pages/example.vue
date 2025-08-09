<script setup lang="ts">
import type { Item } from '~/types/item.example'

const { data: items } = await useFetch<Item[]>('/api/example')
if (!items.value)
  console.error({ statusCode: 404, message: 'Item not found' })

useSeoMeta({
  title: 'Example Page',
  ogTitle: 'Example Page',
  description: 'Nuxt 3 Template, with TypeScript, Tailwind 4, DrizzleORM and Supabase.',
  ogDescription: 'Nuxt 3 Template, with TypeScript, Tailwind 4, DrizzleORM and Supabase.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="container mx-auto px-4">
    Hello World

    <div v-for="item in items" :key="item.id" class="p-4 bg-gray-200">
      {{ item }}
    </div>
  </div>
</template>
