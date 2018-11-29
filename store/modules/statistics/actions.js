import * as URLS from "@/utils/urls";

export const actions = {
  async lgaDetails({ commit }) {
    const response = await this.$axios.$get(URLS.lga, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    });
    commit("SET_LGA", response);
  }
};
