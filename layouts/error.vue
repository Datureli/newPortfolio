<template>
  <v-app dark>
    <h2 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h2>
    <h2 v-else>
      {{ otherError }}
    </h2>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
