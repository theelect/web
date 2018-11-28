export const getters = {
  isAuthenticated(state) {
    if (state.user !== null && state.token !== null) {
      return true;
    }
    return false;
  },

  email(state) {
    return state.user.email
  }
};
