export default {
  target: "static",
  head: {
    mode: "universal",
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

  components: true,
  loaders: {
    vue: {
      compilerOptions: {
        preserveWhitespace: false,
      },
    },
  },

  buildModules: ["@nuxtjs/vuetify"],

  //modules: ["@nuxtjs/sitemap", "@nuxtjs/google-analytics"],

  googleAnalytics: {
    id: "{YOUR GOOGLE ANALYTICS ID}",
    dev: false,
  },
};
