import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _afe7dda4 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _034996c4 = () => interopDefault(import('../pages/age.vue' /* webpackChunkName: "pages/age" */))
const _c57bddf0 = () => interopDefault(import('../pages/all-voters.vue' /* webpackChunkName: "pages/all-voters" */))
const _46524d44 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _02a91273 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _0aa5e08d = () => interopDefault(import('../pages/edit-user.vue' /* webpackChunkName: "pages/edit-user" */))
const _393d6824 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _40908b5e = () => interopDefault(import('../pages/lgas.vue' /* webpackChunkName: "pages/lgas" */))
const _5fa2c108 = () => interopDefault(import('../pages/message-detail.vue' /* webpackChunkName: "pages/message-detail" */))
const _a5026c86 = () => interopDefault(import('../pages/messages.vue' /* webpackChunkName: "pages/messages" */))
const _bb1588dc = () => interopDefault(import('../pages/new-contact.vue' /* webpackChunkName: "pages/new-contact" */))
const _6bfacbf9 = () => interopDefault(import('../pages/new-message.vue' /* webpackChunkName: "pages/new-message" */))
const _d817eb6e = () => interopDefault(import('../pages/new-user.vue' /* webpackChunkName: "pages/new-user" */))
const _2cd7bf2d = () => interopDefault(import('../pages/profession.vue' /* webpackChunkName: "pages/profession" */))
const _3bda44c8 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _cafd0128 = () => interopDefault(import('../pages/realtime-voters.vue' /* webpackChunkName: "pages/realtime-voters" */))
const _18f54114 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _3492ce83 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _48e7b4aa = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _33bb2ad6 = () => interopDefault(import('../pages/users/_id/index.vue' /* webpackChunkName: "pages/users/_id/index" */))
const _769cbd31 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      path: "/admin",
      component: _afe7dda4,
      name: "admin"
    }, {
      path: "/age",
      component: _034996c4,
      name: "age"
    }, {
      path: "/all-voters",
      component: _c57bddf0,
      name: "all-voters"
    }, {
      path: "/contacts",
      component: _46524d44,
      name: "contacts"
    }, {
      path: "/dashboard",
      component: _02a91273,
      name: "dashboard"
    }, {
      path: "/edit-user",
      component: _0aa5e08d,
      name: "edit-user"
    }, {
      path: "/forgot-password",
      component: _393d6824,
      name: "forgot-password"
    }, {
      path: "/lgas",
      component: _40908b5e,
      name: "lgas"
    }, {
      path: "/message-detail",
      component: _5fa2c108,
      name: "message-detail"
    }, {
      path: "/messages",
      component: _a5026c86,
      name: "messages"
    }, {
      path: "/new-contact",
      component: _bb1588dc,
      name: "new-contact"
    }, {
      path: "/new-message",
      component: _6bfacbf9,
      name: "new-message"
    }, {
      path: "/new-user",
      component: _d817eb6e,
      name: "new-user"
    }, {
      path: "/profession",
      component: _2cd7bf2d,
      name: "profession"
    }, {
      path: "/profile",
      component: _3bda44c8,
      name: "profile"
    }, {
      path: "/realtime-voters",
      component: _cafd0128,
      name: "realtime-voters"
    }, {
      path: "/settings",
      component: _18f54114,
      name: "settings"
    }, {
      path: "/test",
      component: _3492ce83,
      name: "test"
    }, {
      path: "/users",
      component: _48e7b4aa,
      name: "users"
    }, {
      path: "/users/:id",
      component: _33bb2ad6,
      name: "users-id"
    }, {
      path: "/",
      component: _769cbd31,
      name: "index"
    }],

    fallback: false
  })
}
