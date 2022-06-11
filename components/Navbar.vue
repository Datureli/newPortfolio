<template>
  <div>
    <v-app-bar
      elevation="0"
      class="mt-10 mx-auto"
      outlined
      color="transparent"
    >
      <nav class="mx-auto">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link class="ml-3" to="/AboutMe">About</nuxt-link>
        <nuxt-link class="ml-3" to="/ProjectSection">Projects</nuxt-link>
        <nuxt-link class="ml-3" to="/ContactSection">Contact</nuxt-link>
      </nav>
    </v-app-bar>
  </div>
</template>

<style scoped>
nav a {
  font-size: 30px;
  font-weight: 700;
  color: #e0e1ee;
}

a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
