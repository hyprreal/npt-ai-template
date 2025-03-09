<script setup lang="ts">
const { data: items } = await useFetch('/api/item',)
console.log('items: ', items.value)

if (!items.value)
  console.error({ statusCode: 404, message: 'Item not found' })

useSeoMeta({
  title: 'Home',
  ogTitle: 'Home',
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
