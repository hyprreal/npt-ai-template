<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'theme-color', content: '#181a1c' },
    { property: 'og:image', content: '' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
  ],
})
</script>

<template>
  <main class="flex flex-col min-h-dvh bg-white">
    <AppNavigation />

    <div class="flex-grow">
      <slot />
    </div>

    <AppFooter />
  </main>
</template>
