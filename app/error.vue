<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: `Uh oh! - ${props.error?.statusCode}`,
  ogTitle: `Uh oh! - ${props.error?.statusCode}`,
  description: 'You might be lost',
  ogDescription: 'You might be lost',
})
</script>

<template>
  <NuxtLayout>
    <section>
      <div class="container flex flex-col items-center mx-auto py-32 px-4 text-center">
        <h2 class="mb-4 text-7xl">
          {{ error?.statusCode }}
        </h2>

        <h2 class="mb-8 text-gray-400">
          Not all who wander are lost. <br> But you might be.
        </h2>

        <div class="clickable button bg-indigo-600 text-white hover:bg-indigo-500" @click="handleError">
          Return Home
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
