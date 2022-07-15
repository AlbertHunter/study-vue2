import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // namespaced:true,
  state: {
    count : 0
  },
  getters: {
    doubleCount: state=>state.count*2
  },
  mutations: {
    addCount(state,payload=1){
      state.count +=payload;
    }
  },
  actions: {
    increment ({ commit }) {
      commit('addCount')
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('addCount')
      }, 1500)
    },
    asyncAddCount({ commit }) {
      setTimeout(() => {
        commit('addCount')
      }, 1500)
    }
  },
  modules: {
  }
})
