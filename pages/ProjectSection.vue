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
        style="filter: contrast(0.5); background-position: bottom center"
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
                  class="d-grid yellow darken-2 text-center white--text"
                  style="height: 100%"
                >
                  <v-card-text class="text-h3 pa-10 mx-auto font-weight-bold">
                    {{ item.title }}</v-card-text
                  >
                  <a :href="item.githubLink" target="_blank">
                    <v-icon x-large>mdi-github</v-icon></a
                  >
                  <a :href="item.liveLink" target="_blank">
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
        <v-icon color="black" style="font-size: 150px" class="mx-auto pulse"
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
          githubLink: "https://github.com/Datureli/frontEndLearning",
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
          githubLink: "https://github.com/Datureli/PizzaWebsiteApp",
          liveLink: "https://serene-feynman-c17c09.netlify.app/",
        },
        {
          title: "shoping cart made with vue 2",
          image: require("../assets/vuecart.png"),
          githubLink: "https://github.com/Datureli/Shopping-cart-with-vue-2-",
          liveLink: "",
        },
        {
          title: "Old portfolio with bootstrap/swiper.js",
          image: require("../assets/oldportfolio.png"),
          githubLink: "https://github.com/Datureli/Projects",
          liveLink: "https://reverent-panini-343037.netlify.app/",
        },
        {
          title: "Car service",
          image: require("../assets/oldportfolio.png"),
          githubLink: "https://github.com/Datureli/carWebsite",
          liveLink: "https://friendly-leakey-4f532f.netlify.app/#",
        },
      ],
    };
  },
};
</script>

<style>
.pulse {
  border-radius: 50%;
  transform: scale(1);
  animation: pulse-black 2s infinite;
  animation-delay: 3s;
  animation-iteration-count: 1;
}
@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.897);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.87);
  }
}
</style>
