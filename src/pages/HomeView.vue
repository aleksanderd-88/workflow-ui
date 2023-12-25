<template>
  <div class="home">
    <AppButton 
      icon="plus" 
      class="home__add-btn"
      @click="$router.push({ name: 'create' })"
      v-if="!editorOpen"
    >
      Create new note
    </AppButton>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/common/AppButton.vue';
import { computed } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute()

const editorOpen = computed(() => route?.name?.toString() === 'create')
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    height: calc(100vh - 60px);    

    &__add-btn {
      width: 70%;
      margin: auto;
      padding: 15px;
      border: 1px solid #ccc;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      border-radius: 10px;

      @media (min-width: 400px) {
        width: 250px;
      }
    }

    &__editor {
      margin: auto;
    }
  }
</style>