import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
  lga: null,
  occupation: null,
  age: null,
  reach: null
};

export default {
  state,
  getters,
  mutations,
  actions
};
