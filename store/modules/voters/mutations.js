export const mutations = {
  SET_VOTER: (state, payload) => {
    state.pvc = payload;
  },
  SET_PVC_COUNT: (state, payload) => {
    state.pvcCount = payload;
  }
};
