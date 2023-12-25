<template>
  <div class="home">
    <AppButton 
      icon="plus" 
      class="home__add-btn"
      @click="editorOpen = true"
      v-if="!editorOpen"
    >
      Create new note
    </AppButton>

    <AppEditor
      v-if="editorOpen"
      class="home__editor" 
      @on-text-change="saveTextChange($event)"
      @close="editorOpen = false" 
    />
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/common/AppButton.vue';
import AppEditor from '@/common/AppEditor.vue';
import { ref } from 'vue'

const editorOpen = ref(false)

const saveTextChange = (event: string) => {
  //- Save text changes
  console.log('text', event);
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    height: calc(100vh - 60px);    

    &__add-btn {
      width: 70%;
      margin: auto;
      padding: 15px;
      border: 1px solid #ccc;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      border-radius: 10px;

      @media (min-width: 400px) {
        width: 250px;
      }
    }

    &__editor {
      margin: auto;
    }
  }
</style>