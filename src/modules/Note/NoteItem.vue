<template>
  <AppButton class="note-item" @click="$emit('on-click')">
    <AppButton 
      class="note-item__action-btn" 
      icon="ellipsis-v"
      @click.stop="optionMenuVisible = true"
    />

    <main class="note-item__content">
      <p class="note-item__created-at">
        {{ updatedAt }}
      </p>

      <p class="note-item__timestamp">
        {{ timestamp }}
      </p>
    </main>

    <NoteOptions 
      :is-visible="optionMenuVisible" 
      @close="optionMenuVisible = false"
      @on-delete="deleteNote(item._id!)"
    />

    <NTooltip trigger="hover" v-if="item.dueDate">
      <template #trigger>
        <i class="note-item__info-icon pi pi-info-circle"></i>
      </template>
      {{ `You have a due date set to the ${ moment(item.dueDate).format('YYYY-MM-DD') }.` }}
    </NTooltip>
  </AppButton>
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import type { NotePropType } from './types';
import moment from 'moment'
import AppButton from '@/common/AppButton.vue';
import NoteOptions from './NoteOptions.vue';
import { useNoteStore } from './stores';

const props = defineProps({
  item: {
    type: Object as PropType<NotePropType>,
    default: () => ({})
  }
})

const optionMenuVisible = ref(false)

const updatedAt = computed(() => moment(props.item.updatedAt).format('YYYY-MM-DD'))
const timestamp = computed(() => moment(props.item.updatedAt).format('HH:mm'))

const deleteNote = (id: string) => {
  if ( !confirm('Continue deleting note?') )
    return

  useNoteStore().deletNote(id as string)
}

</script>

<style lang="scss" scoped>
  .note-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &__action-btn {
      position: absolute;
      top: 1rem;
      right: 0;
    }

    &__content {
      text-align: center;
      line-height: 1.7;
    }

    &__timestamp {
      font-size: .8rem;
      font-weight: 600;
    }

    &__info-icon {
      position: absolute;
      bottom: .5rem;
      right: .5rem;
      font-size: 1rem;
    }
  }
</style>