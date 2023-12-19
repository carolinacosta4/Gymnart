import { defineStore } from 'pinia'
import * as api from '../api/api'

const API_BASE_URL = "http://localhost:4000"

export const useAthleteStore = defineStore('athlete', {
  state: () => ({ 
    athlete: []
   }),
  getters: {
    getAthlete: (state) => state.athlete,
  },
  actions: {
    async fetchAthlete() {
      try {
        const data = await api.get(API_BASE_URL, 'athletes')
        this.athlete = data
      } catch (error) {
        throw error
      }
    }
  },
  // persist: true,
})