<script setup>
  import BaseLayout from './Base.vue';
  import NavBar from '@/components/NavBar.vue';
  import BlogMenu from '@/menus/blog';
</script>
<template>
  <BaseLayout>
    <template v-slot:navbar>
      <NavBar :options="BlogMenu" />
    </template>
  </BaseLayout>
</template>
