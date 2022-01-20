/* eslint-disable */
import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import Todo from "./Todo";
import Post from "./Post";
import Auth from "./Auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Post,
    Todo,
  },
  actions: {},
  mutations: {},
  plugins: [createLogger()],
});
