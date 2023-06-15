<template>
  <div class="container mx-auto p-8">
    <div class="flex justify-between mb-4">
      <h1 class="text-3xl font-bold mb-4 text-frosty-green">Posts</h1>
      <ToggleButton :gridView="gridView" @toggle="toggleView" />
    </div>
    
    <transition name="fade">
      <div class="mt-8" v-if="gridView">
        <GalleryView :posts="posts" />
      </div>
      
      <div class="mt-8" v-else>
        <ListView :posts="posts" />
      </div>
    </transition>
  </div>

</template>
<script setup>
import { ref } from 'vue';
import ToggleButton from '@/components/ToggleButton.vue';
import GalleryView from './public/GalleryView.vue';
import ListView from './public/ListView.vue';

  import PostService from "@/services/PostService"

  const posts = ref([])

  PostService.index()
    .then((data) => {
      posts.value = data.data
    })

const gridView = ref(true);

function toggleView(value) {
  gridView.value = value;
}

</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>