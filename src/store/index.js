import { createStore } from 'vuex'
import { getData as getDataSevices } from '../services/services'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async getData({commit}, data) {
      try {
        const response = await getDataSevices(data.url, data.params);
        return response
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
