<template>
  <div class="home">
    <main class="home__editor">
      <header>
        <p>{{ statusText }}</p>
        <AppButton 
          class="home__close-btn"
        />
      </header>
  
      <AppEditor 
        class="home__editor-element"
        v-model="input"
        @input="startTyping()"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/common/AppButton.vue';
import AppEditor from '@/common/AppEditor.vue';
import { ref } from 'vue';

const input = ref('')
const statusText = ref('')
const timerId = ref()
const isTyping = ref(false)

const saveTextChange = () => {
  //- Save text changes
}

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
  .home {
    display: flex;
    height: 100vh;

    &__editor {
      width: 100%;
      margin: auto;

      @media (min-width: 768px) {
        width: 768px;
        height: 600px;
      }

      header {
        border: 1px solid #ccc;
        border-bottom: unset;
        height: 40px;
        display: flex;
        align-items: center;

        p {
          padding-left: 10px;
        }
      }
    }

    &__close-btn {
      margin-left: auto;
    }

    &__editor-element {
      height: 100vh;

      @media (min-width: 768px) {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>