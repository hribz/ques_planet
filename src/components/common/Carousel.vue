<template>
  <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img
            :src="require('../../assets/logo.png')"
            max-height="100%"
            max-width="400"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-btn
                class="font-weight-black"
                elevation="6"
                :to="'/xkinfo/' + i"
                height="40"
                plain
                color="primary"
              >
                了解详情
              </v-btn>
            </v-row>
          </v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        ".jpg",
        ".jpg",
        ".jpg",
        ".jpg",
        ".jpg",
      ],
    };
  },
};
</script>