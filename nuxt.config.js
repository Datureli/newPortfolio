import colors from "vuetify/es5/util/colors";

export default {
  target: 'static',
  head: {
    titleTemplate: "%s - " + "Paweł Chmielewski",
    title: "portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  generate: {
    fallback: true
  },
  css: [],

  components: true,
  loading: "~/components/loading.vue",

  buildModules: [

    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap", "@nuxtjs/google-analytics"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
  },

  build: {},
  googleAnalytics: {
    id: "{YOUR GOOGLE ANALYTICS ID}",
    dev: false,
  },
};
