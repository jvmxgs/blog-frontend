<script setup>
  const props = defineProps({
    title: String,
    link: String
  })
</script>
<template>
  <li class="inline-block no-underline hover:text-gray-900 hover:text-underline font-albert-sans text-md">
    <router-link :to="link" class="text-ghost-white hover:text-white text-lg">[ {{ title }} ]</router-link>
  </li>
</template>
<style scoped>
  li {
    transition: all 0.2s;
  }

  li:hover {
    transform: translateY(-2px);
  }
</style>