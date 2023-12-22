import { defineStore } from 'pinia'
import * as api from '../api/api'

const API_BASE_URL = "http://localhost:4000"

export const useAthleteStore = defineStore('athlete', {
  state: () => ({ 
    athletes: []
   }),
  getters: {
    getAthletes: (state) => state.athletes,
    getAthlete: (state) => (id) => state.athletes.find((athlete) => athlete.id == id)
  },
  actions: {
    async fetchAthletes() {
      try {
        const data = await api.get(API_BASE_URL, 'athletes')
        this.athletes = data
      } catch (error) {
        throw error
      }
    }
  },
  // persist: true,
})