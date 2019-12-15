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
  login({ commit }, user) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: 'http://localhost:3000/api/v1/user/login',
          data: user,
          method: 'POST'
        })

        localStorage.setItem('leands2b/token', response.data.token)
        // axios.defaults.headers.common['Authorization'] = response.data.token
        commit('setUser', response.data)

        resolve(response.data)
      } catch (error) {
        localStorage.removeItem('leands2b/token')
        reject(error)
      }
    })
  },
  async register({ commit }, user) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: 'http://localhost:3000/api/v1/user',
          data: user,
          method: 'POST'
        })

        commit('setUser', {})
        resolve(response.data)
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
