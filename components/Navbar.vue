<template>
  <v-app-bar
    dense
    outlined
    dark
    style="background: transparent; border: 2px solid"
    width="500"
    class="mx-auto mr-md-15 mt-5 rounded-pill"
  >
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link class="ml-3" to="/AboutMe">About</nuxt-link>
    <nuxt-link class="ml-3" to="/ProjectSection">Projects</nuxt-link>
    <nuxt-link class="ml-3" to="/ContactSection">Contact</nuxt-link>
  </nav>

  </v-app-bar>
</template>

<style scoped>
nav {
  text-align: right;
  justify-content: right;
  display: flex;
  padding: 20px 30px;
}
nav a {
  font-size: 30px;
  font-weight: 700;
  color: #e0e1ee;
}
a.nuxt-link-active {
  font-weight: bold;
}

a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
