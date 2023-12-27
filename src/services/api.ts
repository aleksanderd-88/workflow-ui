import axios, { type AxiosResponse} from 'axios'
import { type NotePropType } from '@/modules/Note/types'

const client = axios.create({
  baseURL: `${ import.meta.env.VITE_API_URL }/api/v1`,
  withCredentials: false,
  timeout: 60000
})

export default {
  getNoteData(id: string): Promise<AxiosResponse> {
    return client.get(`/notes/${ id }/get`)
  },
  setNoteData(params: { data: NotePropType }): Promise<AxiosResponse> {
    return client.patch(`/notes/update`, params)
  },
  listNotes(): Promise<AxiosResponse> {
    return client.get(`/notes/list`)
  },
  deleteNote(id: string): Promise<AxiosResponse> {
    return client.delete(`/notes/${ id }/delete`)
  }
}