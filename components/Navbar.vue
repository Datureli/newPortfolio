<template>
  <v-app-bar
    dense
    outlined
    dark
    style="background: transparent; border: 2px solid"
    width="500"
    class="mx-auto mr-15 mt-5 rounded-pill"
  >
  <nav>
    <nuxt-link to="/Home">Home</nuxt-link>
    <nuxt-link class="ml-3" to="/">About</nuxt-link>
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
</style>
