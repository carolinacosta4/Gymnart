import { defineStore } from 'pinia'
import * as api from '../api/api'

const API_BASE_URL = "http://localhost:4000"

export const useEventStore = defineStore('event', {
  state: () => ({ 
    events: []
   }),
  getters: {
    getEvents: (state) => state.events,
    getEvent: (state) => (id) => state.events.find((event) => event.id == id)
  },
  actions: {
    async fetchEvents() {
      try {
        const data = await api.get(API_BASE_URL, 'events')
        this.events = data
      } catch (error) {
        throw error
      }
    }
  },
})