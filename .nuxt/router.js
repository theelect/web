import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _e4866978 = () => interopDefault(import('../pages/age.vue' /* webpackChunkName: "pages/age" */))
const _7b0ed3a2 = () => interopDefault(import('../pages/all-voters.vue' /* webpackChunkName: "pages/all-voters" */))
const _3dc2ee5e = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _0d66d6ce = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _014962b3 = () => interopDefault(import('../pages/edit-user.vue' /* webpackChunkName: "pages/edit-user" */))
const _0e41fd0c = () => interopDefault(import('../pages/enlarged-map.vue' /* webpackChunkName: "pages/enlarged-map" */))
const _2de435ca = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _c53c6d10 = () => interopDefault(import('../pages/lgas.vue' /* webpackChunkName: "pages/lgas" */))
const _2db8a6a2 = () => interopDefault(import('../pages/message-detail.vue' /* webpackChunkName: "pages/message-detail" */))
const _b6212a52 = () => interopDefault(import('../pages/messages.vue' /* webpackChunkName: "pages/messages" */))
const _7e40cc38 = () => interopDefault(import('../pages/new-contact.vue' /* webpackChunkName: "pages/new-contact" */))
const _47c65c9f = () => interopDefault(import('../pages/new-message.vue' /* webpackChunkName: "pages/new-message" */))
const _221a5233 = () => interopDefault(import('../pages/new-password.vue' /* webpackChunkName: "pages/new-password" */))
const _e936a93a = () => interopDefault(import('../pages/new-user.vue' /* webpackChunkName: "pages/new-user" */))
const _0aa481c7 = () => interopDefault(import('../pages/profession.vue' /* webpackChunkName: "pages/profession" */))
const _7da4186e = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _e1af65dc = () => interopDefault(import('../pages/realtime-voters.vue' /* webpackChunkName: "pages/realtime-voters" */))
const _1065e22e = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _dd37e6c6 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _6bddfc7c = () => interopDefault(import('../pages/wards.vue' /* webpackChunkName: "pages/wards" */))
const _98197b52 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _e4866978,
      name: "age"
    }, {
      path: "/all-voters",
      component: _7b0ed3a2,
      name: "all-voters"
    }, {
      path: "/contacts",
      component: _3dc2ee5e,
      name: "contacts"
    }, {
      path: "/dashboard",
      component: _0d66d6ce,
      name: "dashboard"
    }, {
      path: "/edit-user",
      component: _014962b3,
      name: "edit-user"
    }, {
      path: "/enlarged-map",
      component: _0e41fd0c,
      name: "enlarged-map"
    }, {
      path: "/forgot-password",
      component: _2de435ca,
      name: "forgot-password"
    }, {
      path: "/lgas",
      component: _c53c6d10,
      name: "lgas"
    }, {
      path: "/message-detail",
      component: _2db8a6a2,
      name: "message-detail"
    }, {
      path: "/messages",
      component: _b6212a52,
      name: "messages"
    }, {
      path: "/new-contact",
      component: _7e40cc38,
      name: "new-contact"
    }, {
      path: "/new-message",
      component: _47c65c9f,
      name: "new-message"
    }, {
      path: "/new-password",
      component: _221a5233,
      name: "new-password"
    }, {
      path: "/new-user",
      component: _e936a93a,
      name: "new-user"
    }, {
      path: "/profession",
      component: _0aa481c7,
      name: "profession"
    }, {
      path: "/profile",
      component: _7da4186e,
      name: "profile"
    }, {
      path: "/realtime-voters",
      component: _e1af65dc,
      name: "realtime-voters"
    }, {
      path: "/settings",
      component: _1065e22e,
      name: "settings"
    }, {
      path: "/test",
      component: _dd37e6c6,
      name: "test"
    }, {
      path: "/wards",
      component: _6bddfc7c,
      name: "wards"
    }, {
      path: "/",
      component: _98197b52,
      name: "index"
    }],

    fallback: false
  })
}
