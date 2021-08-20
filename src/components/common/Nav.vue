<template>
    <v-app-bar
      app
      color="primary"
      dark
      height="80"
    >
      <v-btn text @click="$router.push('/')">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../../assets/logo.png')"
          transition="scale-transition"
          width="60"
        />
        <span class="mr-2" style="font-size:25px">问卷星球</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        @click="$router.push('/login')"
        target="_blank"
        text
      >
        <v-card-title class="mr-2">登录/注册</v-card-title>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
