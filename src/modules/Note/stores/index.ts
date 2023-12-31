import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { type NotePropType } from "../types";
import API from '@/services/api'
import { useRoute } from "vue-router";
import { useLoaderStore } from "@/modules/Loader/stores";

export const useNoteStore = defineStore('note', () => {
  const noteData = ref({} as NotePropType)
  const notes = ref([] as NotePropType[])
  const route = useRoute()

  watch(() => route.name, (val) => {
    const isRoute = ['create'].includes(val?.toString()!)
    if ( isRoute )
      return resetStore()
  })

  const resetStore = () => {
    noteData.value = {} as NotePropType
  }

  const getNoteData = (id: string) => {
    return API.getNoteData(id).then(({ data }) => {
      noteData.value = data
    })
    .catch(err => console.log(err))
  }

  const setNoteDate = (params: { data: NotePropType }) => {
    if ( noteData.value._id ) {
      params.data = { ...params.data, _id: noteData.value._id }
    }
    
    API.setNoteData(params).then(({ data }) => {
      noteData.value = data
      return getNoteData(noteData.value?._id!)
    })
    .catch(err => console.log(err))
  }

  const listNotes = () => {
    useLoaderStore().setLoading(true)
    return API.listNotes().then(({ data }) => {
      notes.value = data.rows
    })
    .catch(err => console.log(err))
    .finally(() => useLoaderStore().setLoading(false))
  }

  const deletNote = (id: string) => {
    return API.deleteNote(id).then(() => {
      return listNotes()
    })
    .catch(err => console.log(err))
  }

  return {
    noteData,
    getNoteData,
    setNoteDate,
    listNotes,
    notes,
    deletNote
  }
})