import { Store } from 'vuex'
import auth from './modules/auth/index'

export default () => new Store({
  modules: {
    auth
  }
})
