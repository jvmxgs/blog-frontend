<script setup>
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import AuthService from "../services/AuthService"
  import { useAuthStore } from '@/stores/auth'
  import { notify } from "@kyvg/vue3-notification";

  const router = useRouter();
  const authStore = useAuthStore();

  const loginData = ref({
    email: 'admin@example.com',
    password: 'secret',
  })

  async function login() {
    await AuthService.login(loginData.value)
      .then(({ data }) => {
        if (data?.token) {
          authStore.saveToken(data.token)
          authStore.saveUser(data.user)
          router.push('/admin')
          return 
        }
      })
      .catch(({ response }) => {
        notify({
          title: response.data.message,
        });
      })
  }
</script>
<template>
  <main class="w-full grid h-screen place-items-center">
    <section class="w-96 bg-white shadow-sm drop-shadow-sm mt-2 p-4 text-sm rounded-md">
      <div class="flex justify-between items-center">
        <input
          placeholder="Username"
          class="rounded-md border border-link-water px-2 my-3 w-full h-9"
          type="text"
          v-model="loginData.email"
          />
      </div>
      <div class="flex justify-between items-center">
        <input
          placeholder="Password"
          class="rounded-md border border-link-water px-2 my-3 w-full h-9"
          type="password"
          v-model="loginData.password"
          />
      </div>
      <div class="flex justify-between">
        <router-link to="/">
          <button class="bg-east-bay text-ghost-white rounded-md px-4 h-9 text-sm font-albert-sans">Login</button>
        </router-link>
        <button class="bg-east-bay text-ghost-white rounded-md px-4 h-9 text-sm font-albert-sans" v-on:click="login">Login</button>
      </div>  
    </section>
  </main>
</template>