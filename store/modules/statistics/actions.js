import * as URLS from "@/utils/urls";

export const actions = {
  async lgaDetails({ commit }) {
    const response = await this.$axios.$get(URLS.lga, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    });
    commit("SET_LGA", response);
  },
  async occupationDetails({ commit }) {
    const response = await this.$axios.$get(URLS.occupation, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    });
    commit("SET_OCCUPATION", response);
  },
  async ageDetails({ commit }) {
    const response = await this.$axios.$get(URLS.age, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    });
    commit("SET_AGE", response);
  }
};
