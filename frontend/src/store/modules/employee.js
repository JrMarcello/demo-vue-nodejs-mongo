import axios from 'axios'

const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` }

const state = {
  employees: []
}

const getters = {
  getEmployees: state => {
    return state.employees
  }
}

const actions = {
  getAll({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/employee', { headers })

        commit('SETALL', response.data)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  },
  create({ commit }, employee) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/employee', employee, { headers })

        commit('ADD', response.data.employee)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  },
  update({ commit }, employee) {
    return new Promise(async (resolve, reject) => {
      try {
        await axios.put('http://localhost:3000/api/v1/employee', employee, { headers })

        commit('UPDATE', employee)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
  remove({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      try {
        await axios.delete(`http://localhost:3000/api/v1/employee/${id}`, { headers })

        commit('REMOVE', id)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

const mutations = {
  SETALL(state, employees) {
    state.employees = employees
  },
  ADD(state, employee) {
    state.employees.push(employee)
  },
  UPDATE(state, employee) {
    state.employees[state.employees.findIndex(e => e._id === employee._id)] = employee
  },
  REMOVE(state, id) {
    state.employees = state.employees.filter(employee => {
      return employee._id !== id
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
