import { defineStore } from 'pinia'

export const useMapStore = defineStore({
  id: 'map',
  state: () => {
    return {
      map: {},
      // leaflet 图层
      baseLayer: {},
    }
  },
  getters: {
    getMap: (state) => state.map,
    getBaseLayer: (state) => state.baseLayer,
  },
  actions: {
    //更新整个对象
    updateMap(map) {
      this.map = map
    },
    updateBaseLayer(baseLayer) {
      this.baseLayer = baseLayer
    },
  },
  persist: {},
})
