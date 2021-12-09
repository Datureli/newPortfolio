<template>
  <v-container class="mt-15 mx-auto">
    <v-carousel height="250" width="200" class="mt-15" hide-delimiters>
      <v-carousel-item
      elevation="15"
       style="filter: contrast(1.95)"
        class="mx-auto"
        width="400"
        v-for="(item, i) in items"
        :key="i"
        :src="item.image"
      >
      </v-carousel-item>
    </v-carousel>
    <v-card
      width="200"
      elevation="0"
      color="transparent"
      class="ml-10"
      style="top: 60%; left: -10%"
    >
      <v-icon color="black" style="font-size: 150px" class="mx-auto"
        >mdi-github</v-icon
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Platforma do nauki front-endu',
          image: require("../assets/frEndl.png"),
        },
        {
          image: require("../assets/bg.png"),
        },
        {
          image: require("../assets/bg.png"),
        },
        {
          image: require("../assets/bg.png"),
        },
      ],
    };
  },
};
</script>
