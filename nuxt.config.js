import colors from "vuetify/es5/util/colors";

export default {
  target: "static",
  head: {
    mode: 'universal',
    titleTemplate: "%s - " + "Paweł Chmielewski",
    title: "portfolio",
    htmlAttrs: {
      lang: "pl",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  
build: {
  parallel: true,
  cache: true,
  hardSource: true,
},
  components: true,
  loading: "~/components/loading.vue",

  buildModules: ["@nuxtjs/vuetify"],

  //modules: ["@nuxtjs/sitemap", "@nuxtjs/google-analytics"],

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
  },

  googleAnalytics: {
    id: "{YOUR GOOGLE ANALYTICS ID}",
    dev: false,
  },
};
