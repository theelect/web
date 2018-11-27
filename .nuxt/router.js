import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _dfa5648c = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _727a242a = () => interopDefault(import('../pages/age.vue' /* webpackChunkName: "pages/age" */))
const _19266808 = () => interopDefault(import('../pages/all-voters.vue' /* webpackChunkName: "pages/all-voters" */))
const _7a173538 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _478128ff = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _4f7df719 = () => interopDefault(import('../pages/edit-user.vue' /* webpackChunkName: "pages/edit-user" */))
const _331565b0 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _504f8d52 = () => interopDefault(import('../pages/lgas.vue' /* webpackChunkName: "pages/lgas" */))
const _78f66f74 = () => interopDefault(import('../pages/messages/index.vue' /* webpackChunkName: "pages/messages/index" */))
const _11a1df1e = () => interopDefault(import('../pages/new-contact.vue' /* webpackChunkName: "pages/new-contact" */))
const _49b120f6 = () => interopDefault(import('../pages/new-message.vue' /* webpackChunkName: "pages/new-message" */))
const _708e1b86 = () => interopDefault(import('../pages/new-user.vue' /* webpackChunkName: "pages/new-user" */))
const _f9fb0bbe = () => interopDefault(import('../pages/profession.vue' /* webpackChunkName: "pages/profession" */))
const _bec2e358 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _d74d0610 = () => interopDefault(import('../pages/realtime-voters.vue' /* webpackChunkName: "pages/realtime-voters" */))
const _4cba2908 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _3afc8248 = () => interopDefault(import('../pages/messages/_id.vue' /* webpackChunkName: "pages/messages/_id" */))
const _5ebdf9bd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    /* eslint-disable quotes */
    routes: [{
      path: "/admin",
      component: _dfa5648c,
      name: "admin"
    }, {
      path: "/age",
      component: _727a242a,
      name: "age"
    }, {
      path: "/all-voters",
      component: _19266808,
      name: "all-voters"
    }, {
      path: "/contacts",
      component: _7a173538,
      name: "contacts"
    }, {
      path: "/dashboard",
      component: _478128ff,
      name: "dashboard"
    }, {
      path: "/edit-user",
      component: _4f7df719,
      name: "edit-user"
    }, {
      path: "/forgot-password",
      component: _331565b0,
      name: "forgot-password"
    }, {
      path: "/lgas",
      component: _504f8d52,
      name: "lgas"
    }, {
      path: "/messages",
      component: _78f66f74,
      name: "messages"
    }, {
      path: "/new-contact",
      component: _11a1df1e,
      name: "new-contact"
    }, {
      path: "/new-message",
      component: _49b120f6,
      name: "new-message"
    }, {
      path: "/new-user",
      component: _708e1b86,
      name: "new-user"
    }, {
      path: "/profession",
      component: _f9fb0bbe,
      name: "profession"
    }, {
      path: "/profile",
      component: _bec2e358,
      name: "profile"
    }, {
      path: "/realtime-voters",
      component: _d74d0610,
      name: "realtime-voters"
    }, {
      path: "/settings",
      component: _4cba2908,
      name: "settings"
    }, {
      path: "/messages/:id",
      component: _3afc8248,
      name: "messages-id"
    }, {
      path: "/",
      component: _5ebdf9bd,
      name: "index"
    }],
    /* eslint-enable quotes */

    fallback: false
  })
}
