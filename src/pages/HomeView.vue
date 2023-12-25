<template>
  <div class="home">
    <AppEditor 
      class="home__editor" 
      @on-text-change="saveTextChange($event)" 
    />
  </div>
</template>

<script setup lang="ts">
import AppEditor from '@/common/AppEditor.vue';
import type { EditorTextChangeEvent } from 'primevue/editor';

const saveTextChange = (event: EditorTextChangeEvent) => {
  //- Save text changes
  console.log('text', event.textValue);
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    height: 100vh;    

    &__editor {
      margin: auto;
    }
  }
</style>