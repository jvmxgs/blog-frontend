<script setup>
  import { ref } from "vue"
  import PostService from "@/services/admin/PostService"
  import btn from '@/components/Btn.vue'

  const posts = ref([])

  PostService.index()
    .then((data) => {
      posts.value = data.data
    })
</script>
<template>
  <div>
    <div class="flex justify-between items-center">
      <h1>Posts</h1>
      <router-link to="/admin/posts/new">
        <btn>New</btn>
      </router-link>
    </div>
    <div v-for="post in posts" :key="post.id">
      <h2 class=""><router-link :to="'posts/' + post.id + '/edit'">{{ post.title }}</router-link></h2>
    </div>
  </div>
</template>