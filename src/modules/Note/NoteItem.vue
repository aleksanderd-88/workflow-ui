<template>
  <div class="note-item">
    <p class="note-item__created-at">
      {{ createdAt }}
    </p>
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

const createdAt = computed(() => moment(props.item.createdAt).format('YYYY-MM-DD HH:mm'))
</script>

<style lang="scss" scoped>
  .note-item {
    cursor: pointer;
    display: flex;

    &__created-at {
      margin: auto;
    }
  }
</style>