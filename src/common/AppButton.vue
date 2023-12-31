<template>
  <button 
    class="app-btn"
    :class="modifiedClass"
    :type="type"
  >
    <div class="app-btn__text-content">
      <slot />
    </div>
    <i 
      :class="`pi pi-${ icon }`" 
      style="font-size: 1.5rem" 
      v-if="icon">
    </i>
  </button>
</template>

<script setup lang="ts">
import { computed, type ButtonHTMLAttributes, type PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button'
  },

  icon: {
    type: String,
    default: null
  },

  hideLabel: {
    type: Boolean,
    default: false
  }
})

const modifiedClass = computed(() => props.hideLabel && 'app-btn--hide-label')
</script>

<style lang="scss" scoped>
  .app-btn {
    $root: &;

    &--hide-label {
      #{$root}__text-content {
        display: none;
        @media(min-width: 1024px) {
          display: block;
        }
      }
    }
  }
</style>