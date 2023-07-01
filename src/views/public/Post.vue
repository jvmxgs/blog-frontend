<script setup>
  import { ref, onMounted } from "vue"
  import PostService from "@/services/PostService"
  import { routerKey, useRoute, useRouter } from 'vue-router'
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";

  const route = useRoute()
  const post = route.params.post
  let tags = post.tags.map(s => '#' + s).join(' ')

  onMounted(() => {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  })
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