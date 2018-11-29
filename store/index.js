import { Store } from 'vuex'
import auth from './modules/auth/index'
import voters from "./modules/voters/index"
import statistics from "./modules/statistics/index";

export default () =>
  new Store({
    modules: {
      auth,
      voters,
      statistics
    }
  });
