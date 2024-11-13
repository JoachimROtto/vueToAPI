import { createStore } from 'vuex';
export const store = createStore({
  modules: {},
  state: {
    urlToken: '',
    urlPrefix: 'http://localhost:8080/',
  },
  mutations: {
    setURLToken(state, value: string) {
      state.urlToken = value;
    },
  },
  getters: {
    getURLToken(state) {
      return state.urlToken;
    },
  },
});
