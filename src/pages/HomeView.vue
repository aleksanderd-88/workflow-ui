<template>
  <div class="home" :class="modifiedClass">
    <NoteList v-if="notesExist" />

    <AppButton
      v-else
      icon="plus" 
      class="add-btn d-flex center-align"
      @click="$router.push({ name: 'create' })"
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
import NoteList from '@/modules/Note/NoteList.vue';

const route = useRoute()

const editorOpen = computed(() => route?.name?.toString() === 'create')
const notesExist = computed(() => useNoteStore().notes.length)
const modifiedClass = computed(() => !notesExist.value && 'home--d-flex')

onBeforeRouteUpdate(() => {
  useNoteStore().listNotes()
})
</script>

<style lang="scss" scoped>
  .home {
    height: calc(100vh - 60px);

    &__editor {
      margin: auto;
    }

    &--d-flex {
      display: flex;
    }
  }
</style>