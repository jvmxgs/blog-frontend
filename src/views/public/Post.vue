<script setup>
  import { onMounted } from "vue"
  import { useRoute } from 'vue-router'
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";
  import { useHead } from "@vueuse/head"

  const route = useRoute()
  const post = route.params.post
  let tags = post.tags.map(s => '#' + s).join(' ')

  onMounted(() => {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: location.protocol + '//' + location.host + '/posts/' + post.slug,
      },
    ],
  })

  let postDate = new Date(post.updated_at).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })

</script>
<template>
  <article>
    <section class="mb-4">
      <h1 class="text-3xl font-sans font-bold text-frosty-green mb-4">{{ post.title }}</h1>
    </section>
    <section class="mb-4 flex justify-end">
      <span class="text-xs text-frosty-green">Posted on {{ postDate }}</span>
    </section>
    <section v-html="post.content" class="text-frosty-green font-albert-sans text-lg mb-8">
    </section>
    <!-- <section class="my-4">
      <span class="rounded-full bg-east-bay text-ghost-white px-3 py-1 m-1">animations</span>
      <span class="rounded-full bg-east-bay text-ghost-white px-3 py-1 m-1">laravel</span>
      <span class="rounded-full bg-east-bay text-ghost-white px-3 py-1 m-1">animations</span>
      <span class="rounded-full bg-east-bay text-ghost-white px-3 py-1 m-1">animations</span>
    </section> -->
  </article>
</template>