import { defineStore } from 'pinia'

export const useImageStore = defineStore('image', {
  state: () => ({ 
    image: "",
   }),
  getters: {
    getImage: (state) => state.image,
  },
  actions: {

  },
})