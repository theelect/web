import * as URLS from "@/utils/urls";

export const actions = {
  async login({ commit }, credentials) {
    const { token } = await this.$axios.$post(URLS.login, credentials);
    this.$axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    commit("SET_TOKEN", token);
  },

  async userDetails({ commit }) {
    const response = await this.$axios.$get(URLS.user);
    commit("SET_USER", response);
  },

  async logout() {
    // const response = await this.$axios.$post(URLS.logout);
    window.localStorage.clear();
  }
};
