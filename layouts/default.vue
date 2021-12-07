<template>
  <v-app>
    <v-main
      style="filter: contrast(1.95)"
      :style="`background-image: url(${require('../assets/bg.png')})`"
      class="fill-height bg-image"
    >
      <Navbar />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style>
.bg-image {
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
.nuxt-link-exact-active {
  color: green;
}
a {
  text-decoration: none;
  font-size: 27px;
}

p:last-of-type {
  margin-bottom: 0px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.7s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
