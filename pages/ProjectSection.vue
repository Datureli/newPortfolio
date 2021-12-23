<template>
  <v-container
    class="mt-15 mx-auto"
    style="
      -webkit-box-shadow: 8px 8px 100px 0px rgba(17, 34, 218, 1);
      -moz-box-shadow: 8px 8px 100px 0px rgba(17, 34, 218, 1);
      box-shadow: 8px 8px 10px 0px white;
    "
  >
    <v-carousel height="250" width="200" class="mt-15 d-grid" hide-delimiters>
      <v-carousel-item
        style="
          height: 100%;
          filter: contrast(0.5);
          background-position: bottom center;
        "
        class="mx-auto"
        width="500"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img :src="item.image">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-grid transition-fast-in-fast-out yellow darken-2 v-card--reveal text-center white--text"
                  style="height: 100%"
                >
                  <v-card-text  class="text-h3 mx-auto mt-10">
                    {{ item.title }}</v-card-text
                  >
                  <a :href="item.githubLink">
                    <v-icon x-large>mdi-github</v-icon></a
                  >
                  <a href="https://github.com/Datureli">
                    <v-icon x-large>mdi-camera</v-icon></a
                  >
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-carousel-item>
    </v-carousel>

    <v-card
      width="200"
      elevation="0"
      color="transparent"
      class="ml-10"
      style="top: 60%; left: -10%"
    >
      <a href="https://github.com/Datureli" target="_blank">
        <v-icon color="black" style="font-size: 150px" class="mx-auto"
          >mdi-github</v-icon
        >
      </a>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Platforma do nauki front-endu",
          image: require("../assets/frEndl.png"),
          githubLink: "https://github.com/Datureli",
          liveLink: "",
        },
        {
          title: "programming blog made with nuxt",
          image: require("../assets/myblog.png"),
          githubLink: "https://github.com/Datureli/MyBlog",
        },
        {
          title: "pizza website app",
          image: require("../assets/pizzaApp.png"),
          githubLink: "https://github.com/Datureli",
          liveLink: "",
        },
        {
          title: "shoping cart made with vue 2",
          image: require("../assets/vuecart.png"),
          githubLink: "https://github.com/Datureli",
          liveLink: "",
        },
        {
          title: "Old portfolio with bootstrap/jquery",
          image: require("../assets/vuecart.png"),
          githubLink: "https://github.com/Datureli",
          liveLink: "",
        },
      ],
    };
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
