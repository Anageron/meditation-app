import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, http } from '../api'
import type { ApiResponse, IMeditation } from '@/interfaces/Meditation.interfaces'

export const useMeditationListStore = defineStore('meditations', () => {
  const meditationList = ref<IMeditation[]>([])

  async function fetchMeditation() {
    const response  = await (http.get<ApiResponse>(API_ROUTES.meditations))
    meditationList.value = response.data.data.meditations;
  }

  return { meditationList, fetchMeditation }
})
