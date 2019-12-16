import axios from 'axios'

const state = {
  user: null
}

const getters = {
  getUser: state => {
    return state.user
  }
}

const actions = {
  async register({ commit }, user) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/user', user)

        commit('setUser', {})
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  },
  login({ commit }, user) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/user/login', user)

        localStorage.setItem('token', response.data.token)
        commit('setUser', response.data)

        resolve(response.data)
      } catch (error) {
        localStorage.removeItem('token')
        reject(error)
      }
    })
  },
  logout({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        localStorage.removeItem('leands2b/token')
        commit('setUser', null)

        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
