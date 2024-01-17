import { defineStore } from 'pinia'
import * as api from '../api/api'

const API_BASE_URL = "http://localhost:4000"

export const useTeamStore = defineStore('team', {
  state: () => ({ 
    teams: []
   }),
  getters: {
    getTeams: (state) => state.teams,
    getTeam: (state) => (acronym) => state.teams.find((team) => team.acronym == acronym)
  },
  actions: {
    async fetchTeams() {
      try {
        const data = await api.get(API_BASE_URL, 'teams')
        this.teams = data
      } catch (error) {
        throw error
      }
    },

    delete(acronym){
      let index = this.teams.findIndex((team) => team.acronym == acronym)
      this.teams.splice(index, 1)
    },

    add(name, flag, picture, coaches, acronym, gold, silver, bronze, description){
      this.teams.push({name: name, acronym: acronym, flagIcon: flag, picture: picture, athletesList: "", gold: gold, silver: silver, bronze: bronze, coachesName: coaches, description: description})
    }
  },
  // persist: true,
})