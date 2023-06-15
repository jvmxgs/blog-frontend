<script setup>
  import BaseLayout from './Base.vue';
  import NavBar from '@/components/NavBar.vue';
  import AdminMenu from '@/menus/admin';
</script>
<template>
  <BaseLayout>
    <template v-slot:navbar>
      <NavBar :options="AdminMenu" />
    </template>
  </BaseLayout>
</template>