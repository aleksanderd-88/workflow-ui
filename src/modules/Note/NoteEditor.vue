<template>
  <div>
    <AppEditor
      class="home__editor" 
      @on-text-change="saveTextChange($event)"
      @close="$router.go(-1)"
      :data="data"
    />
  </div>
</template>

<script setup lang="ts">
import AppEditor from '@/common/AppEditor.vue';
import { useNoteStore } from './stores';
import type { NotePropType } from './types';
import { computed } from 'vue';

const saveTextChange = (event: NotePropType) => {
  //- Save text changes
  const data = {
    text: event.text,
    dueDate: event.dueDate
  }  
  useNoteStore().setNoteDate({ data })
}

const data = computed(() => useNoteStore().noteData)
</script>

<style scoped>

</style>