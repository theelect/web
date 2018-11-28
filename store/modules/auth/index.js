import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
  user: null,
  token: null
};

export default {
  state,
  getters,
  mutations,
  actions
};
