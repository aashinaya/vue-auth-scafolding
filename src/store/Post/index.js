/* eslint-disable */
import api from "../../services/api";
import * as PostActions from "./types";

const state = {
  posts: [],
  post: null,
  postsLoading: false,
};
const getters = {
  post: (state) => state.post,
  posts: (state) => state.posts,
  postsLoading: (state) => state.postsLoading,
};
const actions = {
  async getPosts({ commit }) {
    commit(PostActions.LOADING);
    // const { data } = await api.get("/posts?limit_15");

    const { data } = await api.get("/employees");
    console.log("DATA", data);
    commit(PostActions.SET_POSTS, data);
    commit(PostActions.LOADING);
  },
  getPostById() {},
  async deletePostById({ commit }, id) {
    commit(PostActions.LOADING);
    await api.delete(`/posts/${id}`);
    commit(PostActions.DELETE_POST, id);
    commit(PostActions.LOADING);
  },
  async getPost({ commit }, id) {
    commit(PostActions.LOADING);
    const { data } = await api.get(`/posts/${id}`);
    commit(PostActions.SET_POST, data);
    commit(PostActions.LOADING);
  },
  async updatePostById({ commit }, updatedPost) {
    commit(PostActions.LOADING);
    const { data } = await api.put(`/posts/${updatedPost.id}`, updatedPost);
    // commit(PostActions, data);
    console.log("EDITED_POST", data);
    commit(PostActions.LOADING);
  },
};
const mutations = {
  [PostActions.SET_POSTS](state, payload) {
    state.posts = payload;
  },
  [PostActions.LOADING](state) {
    state.postsLoading = !state.postsLoading;
  },
  [PostActions.DELETE_POST](state, id) {
    state.posts = state.posts.filter((post) => post.id !== id);
  },
  [PostActions.SET_POST](state, payload) {
    state.post = payload;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
