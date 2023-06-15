<template>
  <btn @click="toggleView">
    <font-awesome-icon class="fa-2xl m-1" :icon="gridView ? 'fa-list-squares' : 'fa-grip'" />
  </btn>
</template>

<script setup>
  import { ref } from 'vue';
  import Btn from './Btn.vue'

  const emit = defineEmits(['toggle'])
  const gridView = ref(true);

  function toggleView() {
    gridView.value = !gridView.value;
    emit('toggle', gridView.value);
  }
</script>