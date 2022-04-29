<template>
  <v-container class="mt-9 mx-auto">
   
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Platforma do nauki front-endu",
          image: require("../assets/frontend.png"),
          githubLink: "https://github.com/Datureli/frontEndLearning",
          liveLink: "https://cranky-leakey-58c4cc.netlify.app/",
        },
        {
          title: "programming blog made with nuxt",
          image: require("../assets/myblog.png"),
          githubLink: "https://github.com/Datureli/MyBlog",
        },
        {
          title: "pizza website app",
          image: require("../assets/pizzaapp.png"),
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
          image: require("../assets/cars.png"),
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
