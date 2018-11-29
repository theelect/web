export const getters = {
  pvc(state) {
    return state.pvc;
  },
  voter_info(state) {
    return state.pvc.docs[3].voter_info.Voter;
  }
};
