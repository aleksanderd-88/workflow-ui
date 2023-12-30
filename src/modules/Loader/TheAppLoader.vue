<template>
  <div class="app-loader" v-if="isLoading">
    <span class="loader"></span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLoaderStore } from './stores';

  const isLoading = computed(() => useLoaderStore().isLoading)
</script>

<style scoped>
 .app-loader {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  backdrop-filter: blur(2px);
  background-color: rgba(#000, .1);
 }

 .loader {
  margin: auto;
 }
    
</style>