<template>
  <div 
    class="note-options" 
    :class="modifiedClass" 
    @click.stop
  >
    <AppButton 
      class="note-options__close-btn" 
      icon="times"
      @click.stop="$emit('close')" 
    />

    <AppButton 
      icon="trash" 
      class="note-options__action-btn note-options__action-btn--delete"
      @click.stop="$emit('on-delete')"
    >
      Delete
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/common/AppButton.vue';
import { computed } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const modifiedClass = computed(() => props.isVisible && 'note-options--visible')

</script>

<style lang="scss" scoped>
  .note-options {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    cursor: initial;
    border-radius: 10px;
    background-color: #fff;
    transform: translateY(20px);
    opacity: 0;
    z-index: 1;
    visibility: hidden;
    transition: transform .25s, opacity .25s, visibility .25s ease;

    &__close-btn {
      position: absolute;
      top: .5rem;
      right: 0;
    }

    &__action-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-transform: uppercase;

      &--delete {
        background-color: #FF3D00;
        color: #fff;
      }
    }

    &--visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
</style>