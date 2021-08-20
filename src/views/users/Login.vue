<template>
  <div>
    <v-container id="login">
      <v-stepper v-model="e1">
        <v-stepper-header style="justify-content:center">
              <v-card-title style="font-weight: 550">登&nbsp&nbsp录</v-card-title>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="loginForm.email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="loginForm.password"
                  :rules="passwordRules"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  name="input-10-1"
                  hint="密码必须包含字母和数字，且在6~18位之间"
                  counter
                  @click:append="show = !show"
                  label="Password"
                  required
                ></v-text-field>
              </v-form>
            </v-card>

            <v-row style="margin-top: 5px" >
              <v-col
                align="left"
                style="font-size: 15px"
                ><a @click="$router.push('/password')">忘记密码?</a></v-col
              >
              <v-spacer></v-spacer>
              <v-col
                align="right"
                style="font-size: 15px"
                ><a @click="$router.push('/register')">注册账号</a></v-col
              >
            </v-row>

            <v-btn color="primary" @click="login" style="margin-top: 5px"> <span style="font-size:15px">登录</span> </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      show: false,
      loginForm: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "请填写邮箱！",
        (v) => /.+@.+\..+/.test(v) || "请检查邮箱地址是否合法",
      ],
      passwordRules: [
        (v) => !!v || "请填写密码！",
        (v) => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/.test(v) || "请检查密码格式是否正确",
      ],
      select: null,
      e1: 1,
    };
  },

  watch: {},

  methods: {
    login() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.$axios
        .post("/user/login", this.loginForm)
        .then((response) => {})
        .catch((err) => {});
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
#login {
  width: 500px;
  position: relative;
  text-align: center;
  margin-top: 5%;
}
</style>