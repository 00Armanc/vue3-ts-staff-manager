import { createStore } from 'vuex'

const staffs = window.localStorage.getItem('staffs')

export default createStore({
  state: {
    staffs: staffs ? JSON.parse(staffs) : [],
    isEdit: false
  },
  getters: {},
  mutations: {
    setData(state, data) {  
      state.staffs.push(data)
    },
    deleteData(state, index) {
      const num = state.staffs.indexOf(index)
      state.staffs.splice(num,1)
    },
    saveData(state) {
      window.localStorage.setItem('staffs', JSON.stringify(state.staffs))
    }
  },
  actions: {
    getData({ commit }, data) {
      commit('setData', data)
    },
    removeData({ commit }, index) {
      commit('deleteData', index)
    }
  }
})
