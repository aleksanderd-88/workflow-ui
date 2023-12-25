<template>
  <button 
    class="app-btn" 
    :type="type"
  >
    <slot />
    <i 
      :class="`pi pi-${ icon }`" 
      style="font-size: 1.5rem" 
      v-if="icon">
    </i>
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, PropType } from 'vue';

defineProps({
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button'
  },

  icon: {
    type: String,
    default: 'times'
  }
})
</script>

<style lang="scss" scoped>

</style>