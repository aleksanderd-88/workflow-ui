<template>
  <AppOverlay :is-visible="$route.name === 'create'" @close="$router.go(-1)">
    <AppEditor
      class="home__editor" 
      @on-text-change="saveTextChange($event)"
      @close="$router.go(-1)" 
    />
  </AppOverlay>
</template>

<script setup lang="ts">
import AppEditor from '@/common/AppEditor.vue';
import AppOverlay from '@/common/AppOverlay.vue';

const saveTextChange = (event: string) => {
  //- Save text changes
  console.log('text', event);
}

</script>

<style scoped>

</style>