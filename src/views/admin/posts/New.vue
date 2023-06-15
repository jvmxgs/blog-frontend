<script setup>
  import { ref } from "vue"
  import Editor from '@tinymce/tinymce-vue'
  import { useRouter } from "vue-router";
  import PostService from "@/services/admin/PostService"
  import btn from '@/components/Btn.vue'

  const router = useRouter();

  const post = ref({
    title: 'Title of post',
    tags: 'animations, css, svg',
    content: 'Content of post'
  })

  async function savePost() {
    try {
      await PostService.create(post.value)
      router.push('/admin/posts')
    } catch (error) {
      console.log(error.response);
    }
  }
</script>
<template>
  <div class="w-full md:text-lg text-xl">
    <div class="flex justify-between items-center">
      <input v-model="post.title" class="rounded-md border border-link-water px-2 my-3" />
      <btn text="Save" v-on:click="savePost">Save</btn>
    </div>
    <div class="flex justify-between items-center">
      <input v-model="post.tags" class="rounded-md border border-link-water px-2 my-3" />
    </div>
    <Editor
      api-key="uix6jpyy0i974i26zkknx3ncyswoi6hp69vzi08h7nar21sy"
      :init="{
        extended_valid_elements: 'svg[*],animate[*],circle[*]',
        images_file_types: 'svg,jpg,png',
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