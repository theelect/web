import * as URLS from "@/utils/urls";

export const actions = {
  async voterDetails({ commit }) {
    const response = await this.$axios.$get(URLS.pvc, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    });
    commit("SET_VOTER", response);
  },
  async pvcCount({ commit }) {
    const response = await this.$axios.$get(URLS.pvcCount, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    });
    commit("SET_PVC_COUNT", response);
  }
};
