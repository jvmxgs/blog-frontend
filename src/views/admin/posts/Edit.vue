<script setup>
  import { ref } from "vue"
  import Editor from '@tinymce/tinymce-vue'
  import { useRouter } from "vue-router";
  import PostService from "@/services/admin/PostService"
  import btn from '@/components/Btn.vue'

  const router = useRouter();

  const post = ref({
    title: 'Title of post',
    content: 'Content of post'
  })

  const post_id = router.currentRoute.value.params.id

  PostService.edit(post_id)
    .then((response) => {
      post.value = {
        title: response.title,
        content: response.content,
        tags: response.tags.join(', '),
      }
    })

  async function updatePost() {
    PostService.update(post_id, post.value)
      .then((response) => {
        router.push('/admin/posts')
      })
  }
</script>
<template>
  <div class="w-full overflow-x-auto md:text-lg text-xl">
    <div class="flex justify-between items-center">
      <input v-model="post.title" class="rounded-md border border-link-water px-2 my-3" />
      <btn v-on:click="updatePost">Save</btn>
    </div>
    <div class="flex justify-between items-center">
      <input v-model="post.tags" class="rounded-md border border-link-water px-2 my-3" />
    </div>
    <Editor
      api-key="uix6jpyy0i974i26zkknx3ncyswoi6hp69vzi08h7nar21sy"
      :init="{
        extended_valid_elements: 'svg[*],animate[*],circle[*]',
        images_file_types: 'svg,jpg,png,gif',
        plugins: 'codesample code',
        codesample_languages: [
          {text: 'HTML/XML', value: 'markup'},
          {text: 'JavaScript', value: 'javascript'},
          {text: 'CSS', value: 'css'},
          {text: 'PHP', value: 'php'},
          {text: 'Bash', value: 'bash'}
        ],
        toolbar: 'codesample code',
      }"
      v-model="post.content"
    />
  </div>
</template>