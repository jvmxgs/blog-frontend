<script setup>
  import BreadcrumbItem from './BreadcrumbItem.vue';
  import { useRoute } from 'vue-router';
  import { watch, ref } from 'vue';

  const route = useRoute();
  const matchedRoutes = route.matched
  const crumbs = ref(mapRoutes(matchedRoutes))

  watch(() => route.matched, (matched) => {
    crumbs.value = mapRoutes(matched)
  });

  function mapRoutes(matched) {
    return matched.map((route) => ({
      label: route.meta && route.meta.breadcrumb ? route.meta.breadcrumb : route.name,
      to: route.path,
    }))
  }
</script>
<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <breadcrumb-item
        v-for="(crumb, index) in crumbs"
        :key="index"
        :title="crumb.label"
        :link="crumb.to"
      ></breadcrumb-item>
    </ol>
  </nav>
</template>