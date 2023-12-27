<template>
  <AppButton class="note-item" @click="$emit('on-click')">
    <AppButton 
      class="note-item__action-btn" 
      icon="ellipsis-v"
      @click.stop="optionMenuVisible = true"
    />

    <main class="note-item__content">
      <p class="note-item__created-at">
        {{ createdAt }}
      </p>

      <p class="note-item__timestamp">
        {{ timestamp }}
      </p>
    </main>

    <NoteOptions :is-visible="optionMenuVisible" @close="optionMenuVisible = false" />
  </AppButton>
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import type { NotePropType } from './types';
import moment from 'moment'
import AppButton from '@/common/AppButton.vue';
import NoteOptions from './NoteOptions.vue';

const props = defineProps({
  item: {
    type: Object as PropType<NotePropType>,
    default: () => ({})
  }
})

const optionMenuVisible = ref(false)

const createdAt = computed(() => moment(props.item.createdAt).format('YYYY-MM-DD'))
const timestamp = computed(() => moment(props.item.createdAt).format('HH:mm'))

</script>

<style lang="scss" scoped>
  .note-item {
    cursor: pointer;
    display: flex;
    position: relative;
    overflow: hidden;

    &__action-btn {
      position: absolute;
      top: 1rem;
      right: 0;
    }

    &__content {
      margin: auto;
      text-align: center;
      line-height: 1.7;
    }

    &__timestamp {
      font-size: .8rem;
      font-weight: 600;
    }
  }
</style>