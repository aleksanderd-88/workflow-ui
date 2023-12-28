<template>
  <div>
    <TheAppBar />
    <TheAppLoader />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import TheAppLoader from '@/modules/Loader/TheAppLoader.vue';
import TheAppBar from '@/modules/TheAppBar.vue';


</script>

<style scoped>

</style>