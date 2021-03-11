import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: '-1',
    photo: ''
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id;
    },
    setUserPhoto(state, link_photo) {
      state.photo = link_photo;
    }
  },
  actions: {
  },
  modules: {
  }
})
