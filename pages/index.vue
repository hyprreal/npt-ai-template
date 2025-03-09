<script setup lang="ts">
const { data: item } = await useFetch('/api/item')
console.log('items: ', item.value)

if (!item.value)
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
  <div class="container mx-auto p-4">
    Hello World
  </div>
</template>
