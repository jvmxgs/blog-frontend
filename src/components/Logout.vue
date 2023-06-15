<script setup>
  import { useRouter } from "vue-router"
  import { useAuthStore } from '@/stores/auth'

  const router = useRouter();
  const authStore = useAuthStore();

  async function logout() {
    authStore.removeToken()
    authStore.removeUser()
    router.push('/login')
  }
</script>
<template>
  <li class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline font-sans text-md">
    <button v-on:click="logout" class="text-link-water hover:text-white text-lg">[ Logout ]</button>
  </li>
</template>