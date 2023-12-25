<template>
  <div class="editor">
    <header class="editor__top-bar">
      <p 
        class="editor__save-text"
        :class="modifiedClass"
        >{{ statusText }}
      </p>

      <AppButton class="editor__close-btn" @click="$emit('close')" />
    </header>

    <Editor
      @input="debounceOnTextChange($event)"
      class="editor__element"
    />
  </div>
</template>

<script setup lang="ts">
import Editor from 'primevue/editor';
import AppButton from '@/common/AppButton.vue';
import { debounce } from 'lodash'
import { computed, ref, watch } from 'vue';

const emit = defineEmits<{
  (event: 'on-text-change', text: string): void
  (event: 'close'): void
}>()

const statusText = ref('')
const isTyping = ref(false)

watch(() => isTyping.value, val => {
  if ( val ) 
    setTimeout(() => resetStates(), 1000);
})

const modifiedClass = computed(() => isTyping.value && 'editor__save-text--visible')

const onTextChange = (event: { data: string }) => {
  isTyping.value = true
  statusText.value = 'Saving ...'
  emit('on-text-change', event.data)
}

const debounceOnTextChange = debounce(onTextChange, 600)

const resetStates = () => {
  statusText.value = ''
  isTyping.value = false
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
    }

    &__save-text {
      padding-left: 10px;
      font-size: .8rem;
      opacity: 0;
      visibility: hidden;
      transition: opacity .25s, visibility .25s ease;

      &--visible {
        opacity: 1;
        visibility: visible;
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