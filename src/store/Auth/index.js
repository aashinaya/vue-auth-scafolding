/* eslint-disable */
import api, { setToken } from "../../services/api";
import router from "../../router";
import store from "../";
import np from "nprogress";

const state = {
  user: null,
  isLoggedIn: false,
  authLoading: false,
  errors: [],
};
const getters = {
  user: (state) => state.user,
  errors: (state) => state.errors,
  isLoggedIn: (state) => state.isLoggedIn,
  authLoading: (state) => state.authLoading,
};
const actions = {
  async getUser({ commit, dispatch }) {
    try {
      const { data } = await api.get("/users/auth");
      commit("LOGIN_USER", data);
      router.push("/dashboard");
      store.dispatch("Post/getPosts");
    } catch (err) {
      // console.log("ERR", err);
      dispatch("logoutUser");
    } finally {
      commit("AUTH_LOADING");
    }
  },
  async registerUser({ dispatch, commit }, userData) {
    try {
      commit("AUTH_LOADING", true);
      const { data } = await api.post("/users/register", userData);
      await dispatch("handleUserAuthentication", data);
    } catch (err) {
      const { data } = err.response;
      commit("SET_ERRORS", data);
      commit("AUTH_LOADING");
    }
  },
  async loginUser({ dispatch, commit }, userData) {
    try {
      commit("AUTH_LOADING", true);
      const { data } = await api.post("/users/auth", userData);
      await dispatch("handleUserAuthentication", data);
      // eslint-disable-next-line
      Toast.fire({
        icon: "success",
        title: data.message,
      });
    } catch (err) {
      const { data } = err.response;
      commit("SET_ERRORS", data);
      Toast.fire({
        icon: "error",
        title: data.errors.join(", "),
      });
      commit("AUTH_LOADING");
    }
  },
  async handleUserAuthentication(
    { dispatch },
    { tokens: { accessToken, refreshToken } }
  ) {
    // Set the token into the api instance
    setToken(accessToken);
    // Store the token in localstorage
    localStorage.setItem("a_token", accessToken);
    localStorage.setItem("r_token", refreshToken);
    // Get the authenticated User
    await dispatch("getUser");
  },
  async initAuth({ dispatch, commit }) {
    const accessToken = localStorage.getItem("a_token");
    console.log("ACC", accessToken);
    if (!accessToken) {
      return;
    }
    setToken(accessToken);
    commit("AUTH_LOADING", true);
    await dispatch("getUser");
  },
  logoutUser({ commit }) {
    // Remove the tokens from localstorage
    localStorage.removeItem("r_token");
    localStorage.removeItem("a_token");
    // Remove the token from the API instance
    setToken();
    commit("LOGOUT_USER");
    // router.push("/auth/login");
  },
};
const mutations = {
  LOGIN_USER(state, payload) {
    state.isLoggedIn = true;
    state.user = payload;
  },
  AUTH_LOADING(state, payload = false) {
    if (payload) {
      np.start();
    } else {
      np.done();
    }
    state.authLoading = payload;
  },
  LOGOUT_USER(state) {
    state.isLoggedIn = false;
    state.user = null;
  },
  SET_ERRORS(state, payload) {
    state.errors = payload.errors;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
