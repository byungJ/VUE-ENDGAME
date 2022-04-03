import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveUserToCookie,
  saveAuthToCookie,
} from '@/utils/cookies.js';
import { loginUser } from '@/api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN(context, userData) {
      const response = await loginUser(userData);
      console.log(response.data.token);
      context.commit('setToken', response.data.token);
      context.commit('setUsername', response.data.user.username);
      saveAuthToCookie(response.data.token);
      saveUserToCookie(response.data.user.username);
      return response.data;
    },
  },
});
