import { defineStore } from 'pinia'
import * as api from '../api/api'

const API_BASE_URL = "http://localhost:4000"

export const useTeamStore = defineStore('team', {
  state: () => ({ 
    teams: []
   }),
  getters: {
    getTeams: (state) => state.teams,
  },
  actions: {
    async fetchTeams() {
      try {
        const data = await api.get(API_BASE_URL, 'teams')
        this.teams = data
      } catch (error) {
        throw error
      }
    }
  },
  // persist: true,
})