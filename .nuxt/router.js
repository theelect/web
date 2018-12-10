import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5f8fa2ee = () => interopDefault(import('../pages/age.vue' /* webpackChunkName: "pages/age" */))
const _7133e8b8 = () => interopDefault(import('../pages/all-voters.vue' /* webpackChunkName: "pages/all-voters" */))
const _79935e18 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _224584c3 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _2a4252dd = () => interopDefault(import('../pages/edit-user.vue' /* webpackChunkName: "pages/edit-user" */))
const _0f7624a2 = () => interopDefault(import('../pages/enlarged-map.vue' /* webpackChunkName: "pages/enlarged-map" */))
const _422ede74 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _05e9e70e = () => interopDefault(import('../pages/lgas.vue' /* webpackChunkName: "pages/lgas" */))
const _9afd7e90 = () => interopDefault(import('../pages/message-detail.vue' /* webpackChunkName: "pages/message-detail" */))
const _2a62cd6d = () => interopDefault(import('../pages/messages.vue' /* webpackChunkName: "pages/messages" */))
const _4cbe59e2 = () => interopDefault(import('../pages/new-contact.vue' /* webpackChunkName: "pages/new-contact" */))
const _1643ea49 = () => interopDefault(import('../pages/new-message.vue' /* webpackChunkName: "pages/new-message" */))
const _10d80df9 = () => interopDefault(import('../pages/new-user.vue' /* webpackChunkName: "pages/new-user" */))
const _00c996dd = () => interopDefault(import('../pages/profession.vue' /* webpackChunkName: "pages/profession" */))
const _14e1e9d0 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _b91a1488 = () => interopDefault(import('../pages/realtime-voters.vue' /* webpackChunkName: "pages/realtime-voters" */))
const _d44d7678 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _0c27ab9a = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _5c6ed781 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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

    routes: [{
      path: "/age",
      component: _5f8fa2ee,
      name: "age"
    }, {
      path: "/all-voters",
      component: _7133e8b8,
      name: "all-voters"
    }, {
      path: "/contacts",
      component: _79935e18,
      name: "contacts"
    }, {
      path: "/dashboard",
      component: _224584c3,
      name: "dashboard"
    }, {
      path: "/edit-user",
      component: _2a4252dd,
      name: "edit-user"
    }, {
      path: "/enlarged-map",
      component: _0f7624a2,
      name: "enlarged-map"
    }, {
      path: "/forgot-password",
      component: _422ede74,
      name: "forgot-password"
    }, {
      path: "/lgas",
      component: _05e9e70e,
      name: "lgas"
    }, {
      path: "/message-detail",
      component: _9afd7e90,
      name: "message-detail"
    }, {
      path: "/messages",
      component: _2a62cd6d,
      name: "messages"
    }, {
      path: "/new-contact",
      component: _4cbe59e2,
      name: "new-contact"
    }, {
      path: "/new-message",
      component: _1643ea49,
      name: "new-message"
    }, {
      path: "/new-user",
      component: _10d80df9,
      name: "new-user"
    }, {
      path: "/profession",
      component: _00c996dd,
      name: "profession"
    }, {
      path: "/profile",
      component: _14e1e9d0,
      name: "profile"
    }, {
      path: "/realtime-voters",
      component: _b91a1488,
      name: "realtime-voters"
    }, {
      path: "/settings",
      component: _d44d7678,
      name: "settings"
    }, {
      path: "/test",
      component: _0c27ab9a,
      name: "test"
    }, {
      path: "/",
      component: _5c6ed781,
      name: "index"
    }],

    fallback: false
  })
}
