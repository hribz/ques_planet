<template>
  <v-app>
    <Nav></Nav>
    <v-main>
      <router-view/>
    </v-main>
    <Foot></Foot>
  </v-app>
</template>

<script>

import Nav from './components/common/Nav.vue';
import Foot from './components/common/Foot.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Nav,
    Foot,
  }
};
</script>

<style lang="scss" scoped>
</style>
