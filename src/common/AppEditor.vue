<template>
  <div class="editor">
    <header class="editor__top-bar">
      <p 
        class="editor__save-text"
        :class="modifiedClass"
        >{{ statusText }}
      </p>

      <NTooltip trigger="hover">
        <template #trigger>
          <NDatePicker 
            v-model:value="timestamp" 
            type="date"
            class="editor__date-picker"
            @update:value="debounceOnTextChange($event)"
          />
        </template>
        Set date for when note should be due. If not selected, no action will be set.
      </NTooltip>

      <div class="editor__actions">
        <AppButton class="editor__close-btn" icon="times" @click="$emit('close')" />
      </div>
    </header>

    <Editor
      :model-value="data.text"
      @text-change="debounceOnTextChange($event)"
      class="editor__element"
    />
  </div>
</template>

<script setup lang="ts">
import Editor, { type EditorTextChangeEvent } from 'primevue/editor';
import AppButton from '@/common/AppButton.vue';
import { debounce } from 'lodash'
import { computed, ref, watch, type PropType } from 'vue';
import type { NotePropType } from '@/modules/Note/types';
import { useRoute } from 'vue-router';

const emit = defineEmits<{
  (event: 'on-text-change', params: { text: string, dueDate: null | Date }): void
  (event: 'close'): void
}>()

const props = defineProps({
  data: {
    type: Object as PropType<NotePropType>,
    default: () => ({}) 
  }
})

const statusText = ref('')
const isTyping = ref(false)
const timestamp = ref<null | number>(null)
const route = useRoute()

watch(() => props.data.dueDate, value => {
  if ( value && route.name !== 'create' ) {
    timestamp.value = new Date(value).getTime()
  }
}, { immediate: true })

watch(() => isTyping.value, val => {
  if ( val ) 
    setTimeout(() => resetStates(), 1000);
})

const modifiedClass = computed(() => isTyping.value && 'editor__save-text--visible')

const onTextChange = (event: EditorTextChangeEvent) => {
  isTyping.value = true
  statusText.value = 'Saving ...'

  const params = {
    text: event.htmlValue, 
    dueDate: !timestamp.value ? null : new Date(timestamp.value)
  }
  emit('on-text-change', params)
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
      padding: 5px;
      display: flex;
      align-items: center;
      background-color: #fff;
    }

    &__save-text {
      flex: 1;
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

    &__date-picker {
      margin: auto;
      flex: 2;
    }
  
    &__actions {
      margin-left: auto;
      flex: 1;
      display: flex;
      justify-content: flex-end;
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