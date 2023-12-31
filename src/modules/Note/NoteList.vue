<template>
  <div class="note-list">
    <header class="note-list__top-bar d-flex space-between">
      <h1 class="note-list__headline">Your notes</h1>
      <AppButton
        icon="plus" 
        hide-label
        class="add-btn note-list__add-btn"
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
        @on-click="viewNote(item._id as string)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NoteItem from './NoteItem.vue';
import { useNoteStore } from './stores';
import AppButton from '@/common/AppButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const items = computed(() => useNoteStore().notes)

const viewNote = (id: string) => {
  router.push({ name: 'edit', params: { id: id } })
}

</script>

<style lang="scss" scoped>
  .note-list {
    padding: 1rem;

    &__top-bar {
      width: 100%;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 2rem;

      @media (min-width: 450px) {
        justify-content: space-between;
      }
    }

    &__add-btn {
      @media (max-width: 1024px) {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        border-radius: 50%;
        width: 80px;
        height: 80px;
      }
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