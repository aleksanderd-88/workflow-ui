<template>
  <div class="editor">
    <header class="editor__top-bar">
      <p>{{ statusText }}</p>
      <AppButton class="editor__close-btn" />
    </header>

    <Editor
      @text-change="$emit('on-text-change', $event)"
      @input="startTyping()"
      class="editor__element"
    />
  </div>
</template>

<script setup lang="ts">
import Editor, { type EditorTextChangeEvent } from 'primevue/editor';
import AppButton from '@/common/AppButton.vue';

defineEmits<{
  (event: 'on-text-change', text: EditorTextChangeEvent): void
}>()

import { ref } from 'vue';

const statusText = ref('')
const timerId = ref()
const isTyping = ref(false)

const startTyping = () => {
  isTyping.value = true
  statusText.value = 'Saving ...'

  timerId.value = setTimeout(() => {
    resetStates()
  }, 1000);
}

const resetStates = () => {
  statusText.value = ''
  isTyping.value = false
  resetTimer()
}

const resetTimer = () => {
  clearTimeout(timerId.value)
  timerId.value = null
}
</script>

<style lang="scss" scoped>
  .editor {
    width: 100%;
    margin: auto;

    @media (min-width: 768px) {
      width: 768px;
      height: 600px;
    }

    &__top-bar {
      border: 1px solid #ccc;
      border-bottom: unset;
      height: 40px;
      display: flex;
      align-items: center;

      p {
        padding-left: 10px;
      }
    }
  
    &__close-btn {
      margin-left: auto;
    }
  
    &__element {
      height: 100vh;
  
      @media (min-width: 768px) {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>