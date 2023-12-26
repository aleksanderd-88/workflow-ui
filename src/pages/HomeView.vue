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

    <AppOverlay :is-visible="editorOpen" @close="$router.go(-1)">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>  
    </AppOverlay>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/common/AppButton.vue';
import { computed } from 'vue'
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import AppOverlay from '@/common/AppOverlay.vue';
import { useNoteStore } from '@/modules/Note/stores';

const route = useRoute()

const editorOpen = computed(() => route?.name?.toString() === 'create')

onBeforeRouteUpdate(() => {
  useNoteStore().listNotes()
})
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