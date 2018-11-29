export const getters = {
  isAuthenticated(state) {
    if (state.user !== null && state.token !== null) {
      return true;
    }
    return false;
  },

  token(state) {
    return state.token
  },

  user(state) {
    return state.user
  }
};
