<template>
  <v-container>
    <v-row class="justify-center mt-16">
      <v-card color="transparent" elevation="0">
        <v-card-text class="white--text text-h6 mx-auto text-center">
          <Transition>
            <div class="bubble">
              <p
                v-text="
                  !firstPartOfText
                    ? ''
                    : secondPartOfText
                    ? 'Technologie które poznałem:'
                    : 'Znajdziesz mnie na:'
                "
              ></p>

              <div v-if="!firstPartOfText">
                <p>
                  Uczę się ekosystemu jakim jest front-end od ponad roku.Obecnie
                  doskonale swoje umiejętności w kierunku Vuejs i z tym
                  frameworkiem chcę związać swoją przyszłość
                </p>
              </div>
              <v-card
                v-else-if="secondPartOfText"
                height="10"
                color="transparent"
                class="flex-wrap d-flex mx-auto"
                style="justify-content: space-between"
              >
                <v-card
                  height="40"
                  v-for="technology in technologies"
                  :key="technology"
                  color="transparent"
                >
                  <v-card-text class="white--text">{{
                    technology.name
                  }}</v-card-text>
                </v-card>
              </v-card>

              <div
                v-else-if="thirdPartOfText"
                v-for="socialMediaLink in socialMediaLinks"
                :key="socialMediaLink"
              >
                <p>
                  <a :href="socialMediaLink.link" target="_blank">{{
                    socialMediaLink.title
                  }}</a>
                </p>
              </div>
            </div>
          </Transition>
        </v-card-text>
      </v-card>
      <v-card
        v-if="showBackButtons"
        height="150"
        class="reBack text-center mt-12"
        color="transparent"
      >
        <v-row>
          <v-btn small @click="backToFirstPartOfText">1</v-btn>
          <v-btn small @click="backToSecondPartOfText">2</v-btn>
          <v-btn small @click="backToThirdPartOfText">3</v-btn>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    firstPartOfText: false,
    secondPartOfText: false,
    thirdPartOfText: false,
    showBackButtons: false,
    technologies: [
      {
        name: "Html",
      },
      {
        name: "Css",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Vue",
      },
      {
        name: "Vuetify",
      },
      {
        name: "Vue-router",
      },
      {
        name: "Vuex",
      },
      {
        name: "Nuxt",
      },
      {
        name: "Swiper.js",
      },
      {
        name: "Gsap",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Git and Github",
      },
      {
        name: "basic react",
      },
    ],
    socialMediaLinks: [
      {
        title: "Facebook",
        link: "https://www.facebook.com/grzegorz.pacek.79",
      },
      {
        title: "Github",
        link: "https://github.com/Datureli",
      },
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/pawe%C5%82-chmielewski-472a781a6/",
      },
    ],
  }),
  mounted() {
    setTimeout(() => {
      this.firstPartOfText = true;
    }, 5000);
    setTimeout(() => {
      this.secondPartOfText = true;
    }, 5000);
    setTimeout(() => {
      this.thirdPartOfText = true;
      this.secondPartOfText = false;
      this.showBackButtons = true;
    }, 10000);
  },
  methods: {
    backToFirstPartOfText() {
      this.firstPartOfText = false;
      this.secondPartOfText = false;
      this.thirdPartOfText = false;
    },
    backToSecondPartOfText() {
      this.firstPartOfText = true;
      this.secondPartOfText = true;
      this.thirdPartOfText = false;
    },
    backToThirdPartOfText() {
      this.firstPartOfText = true;
      this.thirdPartOfText = true;
      this.secondPartOfText = false;
    },
  },
};
</script>

<style scoped>
.reBack {
  display: grid;
  width: 40px;
  border: 2px solid #ffffff;
}
.bubble {
  width: 430px;
  height: 230px;
  padding: 20px 20px 50px 20px;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/476907/speechbubble.svg")
    no-repeat top center;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
