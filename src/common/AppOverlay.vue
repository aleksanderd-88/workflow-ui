<template>
  <div class="app-overlay" v-if="isVisible" @click.self="$emit('close')">
    <main class="app-overlay__content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    isVisible: {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss" scoped>
  .app-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    background-color: rgba(#000, .25);

    &__content {
      margin: auto;
      width: auto;
    }
  }
</style>