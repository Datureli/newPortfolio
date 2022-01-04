<template>
  <v-container class="d-flex mx-auto mt-10">
    <v-row class="justify-center">
      <v-card color="transparent" elevation="0" class="m-0" max-width="344">
        <v-card-text class="white--text text-h5 mx-auto text-center hidden-sm-and-down">
          <div>
            Uczę się ekosystemu jakim jest front-end od ponad roku,obecnie
            doskonale swoje umiejętności w kierunku Vuejs i z tym frameworkiem
            chcę związać swoją przyszłość
          </div>
        </v-card-text>
      </v-card>
      <v-card
        elevation="0"
        color="transparent darken-2"
        height="350"
        class="m-0"
        width="374"
      >
        <v-card
          color="transparent"
          elevation="0"
          class=" ma-md-5"
          height="280"
          width="284"
          style="border-radius: 50%; margin-left: 60%"
       
        >
          <v-img :src="aboutMeImage" width="300" height="350"> </v-img>
        </v-card>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      aboutMeImage: require("../assets/paw.png"),
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Meow+Script&display=swap");

h1 {
  font-family: "Meow Script";
  font-size: 70px;
}

.half-box {
  position: relative;
  width: 500px;
  background-color: transparent;
  border: 2px solid white;
  padding: 20px;
}
.half-box::before {
  content: "";
  position: absolute;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border-top: 1px solid white;
  border-left: 1px solid white;
}
h2 {
  position: absolute;
  display: inline-block;
  margin-left: 20px;
  padding: 0 10px;
  top: -20px;
  color: white;
  background-color: black;
}
p {
  color: white;
  margin-top: 30px;
  padding-left: 30px;
}
</style>
