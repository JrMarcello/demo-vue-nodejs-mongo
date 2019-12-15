// import Vue from "vue";
// import Vuex from "vuex";
// import VueAxios from "vue-axios";
// import { VueAuthenticate } from "vue-authenticate";
// import Axios from "axios";

// Vue.use(Vuex);
// Vue.use(VueAxios, axios);

// Vue.prototype.$http = Axios;

// const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
//   baseUrl: "http://localhost:3000/api/v1"
// });

// import { user } from '../api';

const state = {
  employees: []
}

const getters = {
  getEmployees: state => {
    return state.employees
  }
}

// const actions = {
//   getAll({ commit }) {
//     console.log("getAll");
//     // commit("getAll", user);

//     // chama api aqui
//   },
//   getByID({ commit }, id) {
//     console.log("getByID", id);
//     //commit("setUser", user);

//     // chama api aqui
//   },
//   create({ commit }, user) {
//     console.log("create", id);
//     //commit("setUser", user);

//     // chama api aqui
//   },
//   update({ commit }, user) {
//     console.log("update", user);
//     //commit("setUser", user);

//     // chama api aqui
//   },
//   remove({ commit }, id) {
//     console.log("remove", id);
//     //commit("setUser", user);

//     // chama api aqui
//   }
// };

const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  //actions,
  mutations
}
