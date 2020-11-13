import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    m_increment (state, payload = 1) {
      state.counter += payload
    }
  },
  actions: {
    a_increment ({ commit }, payload = 1) {
      commit('m_increment', payload)
    }
  },
  modules: {
  }
})
