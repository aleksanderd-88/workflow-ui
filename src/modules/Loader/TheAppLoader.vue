<template>
  <div class="app-loader" v-if="isLoading">
    <p>Loading ...</p>
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
  display: flex;
  z-index: 2;
  background-color: #fff;

  p {
    margin: auto;
  }
 }
</style>