<template>
  <div 
    class="app-overlay" 
    :class="modifiedClass" 
    @click.self="$emit('close')"
  >
    <main class="app-overlay__content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    }
  })

  const modifiedClass = computed(() => props.isVisible && 'app-overlay--visible')
</script>

<style lang="scss" scoped>
  .app-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    opacity: 0;
    visibility: hidden;
    background-color: rgba(#000, .25);

    &__content {
      margin: auto;
      width: auto;
    }

    &--visible {
      transition: opacity .5s, visibility .5s ease;
      opacity: 1;
      visibility: visible;
    }
  }
</style>