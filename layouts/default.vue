<template>
  <v-app style="background: rgba(0, 0, 0, 0)">
    <v-content
    style="  filter: contrast(1.95);"
      :style="`background-image: url(${require('../assets/bg.png')})`"
      class="fill-height bg-image"
    >
      <Navbar />
    </v-content>
  </v-app>
</template>

<style>
.bg-image {
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
</style>
