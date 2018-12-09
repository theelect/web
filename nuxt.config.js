const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: "Tonye Cole",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ],
    script: [
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: "#4881F9"
  },

  /*
  ** Global CSS
  */
  css: ["~/assets/style/app.styl", "~/assets/style/main.scss"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/vuetify",
    { src: "~/plugins/localstorage.js", ssr: false },
    { src: "~/plugins/axios", ssr: false },
    { src: "~plugins/ga.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // "@nuxtjs/auth",
    "@nuxtjs/toast"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "https://theelect.herokuapp.com/api/v1"
  },

  toast: {
    position: "top-right",
    duration: 2000
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },


  /*
  ** Transition
  */
  layoutTransition: {
    name: 'fade'
  },



  build: {
    extend (config, ctx) {
      config.externals = {
        jquery: 'jQuery'
      }
    }
  }
};
