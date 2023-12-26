<template>
  <AppEditor
    class="home__editor" 
    @on-text-change="saveTextChange($event)"
    @close="$router.go(-1)" 
  />
</template>

<script setup lang="ts">
import AppEditor from '@/common/AppEditor.vue';

const saveTextChange = (event: string) => {
  //- Save text changes
  console.log('text', event);
}

</script>

<style scoped>

</style>