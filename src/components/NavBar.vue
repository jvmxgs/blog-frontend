<script setup>
  import NavBarItem from './NavBarItem.vue';
  import Logout from '@/components/Logout.vue';
  import { useAuthStore } from '@/stores/auth'

  const props = defineProps({
    options: Array,
  });

  const authStore = useAuthStore();
</script>
<template>
  <nav class="flex justify-center items-center bg-east-bay rounded-b-md px-4 h-12">
    <span class="w-60">[ Vicode ]</span>
    <ul class="flex justify-end gap-x-4 w-full">
      <NavBarItem v-for="option in options" :key="option.link" :title="option.title" :link="option.link" />
      <Logout v-if="authStore.token"></Logout>
    </ul>
  </nav>
</template>