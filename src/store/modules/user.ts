import { defineStore } from 'pinia'

export interface User {}

export const useUserStore = defineStore({
  id: 'user',
  state: (): User => ({
    userInfo: {},
  }),
  getters: {},
  actions: {},
  persist: {},
})
