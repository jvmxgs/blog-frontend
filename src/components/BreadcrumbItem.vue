<script setup>
  const props = defineProps({
    title: String,
    link: String
  })
</script>
<template>
  <li class="inline-flex items-center">
    <a :href="link" class="inline-flex items-center text-sm font-medium hover:text-east-bay text-link-water cursor-pointer font-albert-sans">
      <!-- <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg> -->
      {{ title }}
    </a>
  </li>
</template>