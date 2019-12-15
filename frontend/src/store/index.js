import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import employee from './modules/employee'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    employee
  }
})
