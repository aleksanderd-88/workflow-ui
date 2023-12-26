<template>
  <div class="note-list">
    <header class="note-list__top-bar d-flex space-between">
      <h1 class="note-list__headline">Your notes</h1>
      <AppButton
        icon="plus" 
        class="add-btn"
        @click="$router.push({ name: 'create' })"
      >
        Create new note
      </AppButton>
    </header>
    
    <div class="note-list__items">
      <NoteItem
        class="note-list__item"
        v-for="item in items" 
        :key="item._id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NoteItem from './NoteItem.vue';
import { useNoteStore } from './stores';
import AppButton from '@/common/AppButton.vue';

const items = computed(() => useNoteStore().notes)

</script>

<style lang="scss" scoped>
  .note-list {
    padding: 1rem;

    &__top-bar {
      width: 100%;
    }

    &__headline {
      margin-bottom: 2rem;
    }

    &__items {
      display: flex;
      gap: 1rem;
    }

    &__created-at {
      display: flex;
    }

    &__item {
      height: 200px;
      width: 150px;
      border: 1px solid #ccc;
      border-radius: 10px;
      transition: background-color .25s ease;

      &:hover {
        background-color: #eee;
      }
    }
  }
</style>