<template>
  <div class="note-item">
    <main class="note-item__content">
      <p class="note-item__created-at">
        {{ createdAt }}
      </p>
      <p class="note-item__timestamp">
        {{ timestamp }}
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { NotePropType } from './types';
import moment from 'moment'

const props = defineProps({
  item: {
    type: Object as PropType<NotePropType>,
    default: () => ({})
  }
})

const createdAt = computed(() => moment(props.item.createdAt).format('YYYY-MM-DD'))
const timestamp = computed(() => moment(props.item.createdAt).format('HH:mm'))
</script>

<style lang="scss" scoped>
  .note-item {
    cursor: pointer;
    display: flex;

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