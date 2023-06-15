<script setup>
  import { ref, computed } from "vue"
  import PostService from "@/services/PostService"
  import { useRoute } from 'vue-router'
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";

  const route = useRoute()
  const post = ref([])
  let tags = ''


  const urlParts = route.path.split('/');

  PostService.show(urlParts[2])
    .then((data) => {
      post.value = data.data
      tags = post.value.tags.map(s => '#' + s).join(' ')
    })
    .finally(() => {
      window.Prism = window.Prism || {};
      window.Prism.manual = true;
      Prism.highlightAll();
    })
    .catch((error) => {
      console.error(error)
    });
</script>
<template>
  <article>
    <section>
      <h1 class="text-3xl font-sans font-bold text-frosty-green mb-4">{{ post.title }}</h1>
    </section>
    <section v-html="post.content" class="text-frosty-green font-albert-sans text-lg">
    </section>
  </article>
</template>