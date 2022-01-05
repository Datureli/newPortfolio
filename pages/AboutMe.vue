<template>
  <v-container class="d-flex mx-auto mt-10">
    <v-row class="justify-center mx-auto mr-15">
      <v-card color="transparent" elevation="0" max-width="344">
        <v-card-text :class="text-{xs}" class="white--text text-h6 mx-auto text-center">
    
          <div class="bubble mx-auto">
            Uczę się ekosystemu jakim jest front-end od ponad roku.Obecnie
            doskonale swoje umiejętności w kierunku Vuejs i z tym frameworkiem
            chcę związać swoją przyszłość
          </div>
        </v-card-text>
      </v-card>

      <v-card
        elevation="0"
        color="transparent darken-2"
        height="350"
        width="374"
      >
        <v-card
          color="transparent"
          elevation="0"
          class="ma-md-5"
          height="270"
          width="274"
          style="border-radius: 50%; margin-left: 60%;"
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


h2 {
  position: absolute;
  display: inline-block;
  margin-left: 20px;
  padding: 0 10px;
  top: -20px;
  color: white;
  background-color: black;
}

.bubble {
  max-width: 700px;
  width: 450px;
  padding: 20px 20px 50px 20px;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/476907/speechbubble.svg")
    no-repeat top center;
}
</style>
