<template>
  <div>
    <v-container id="register">
      <v-stepper v-model="e1">
        <v-stepper-header style="justify-content:center">
          <!-- <template v-for="n in steps">
            <v-stepper-step
              :key="`${n}-step`"
              :complete="e1 > n"
              :step="n"
            >
              Step {{ n }}
            </v-stepper-step>
            <v-divider v-if="n !== steps" :key="n" style="width=100px">
            </v-divider>
          </template> -->
          <v-card-title style="font-weight: bold">注&nbsp&nbsp册</v-card-title>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
            <v-card>
                <v-form v-if="n===1" ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="registerForm.name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="registerForm.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="registerForm.password"
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
                  <v-text-field
                    v-model="registerForm.confirmPassword"
                    :rules="ConfirmPasswordRules"
                    type= 'password'
                    label="Confirm Password"
                    required
                  ></v-text-field>
                </v-form>
                <v-form v-else ref="form" v-model="valid" lazy-validation>
                  

                  <v-text-field
                    v-model="registerForm.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-form>
            </v-card>
            <v-row style="margin-top: 5px" >
              <v-col
                align="right"
                style="font-size: 15px"
                ><a @click="$router.push('/login')">已有账号，立即登录</a></v-col
              >
            </v-row>
            <v-btn color="primary" @click="register" style="margin-top: 5px"> <span style="font-size:15px">注册</span> </v-btn>
            <!-- <v-btn v-if="n === 1" color="primary" @click="nextStep(n)"> Continue </v-btn>
            <v-btn v-else color="primary" @click="register"> Register </v-btn>
            <v-btn text @click="beforeStep(n)" :disabled="!canBefore">Cancel</v-btn> -->
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
      show: false,
      valid: true,
      canBefore: false,
      registerForm: {
        email: "",
        password: "",
        confirmPassword:"",
        name: "",
      },
      nameRules: [
        (v) => !!v || "请填写用户名！",
        (v) => (v && v.length <= 10) || "用户名长度应小于10",
      ],
      emailRules: [
        (v) => !!v || "请填写邮箱！",
        (v) => /.+@.+\..+/.test(v) || "请检查邮箱地址是否合法",
      ],
      passwordRules: [
        (v) => !!v || "请填写密码！",
        (v) => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/.test(v) || "请检查密码格式是否正确",
      ],
      ConfirmPasswordRules:[
        (v) => (v==this.registerForm.password) || "not match",
      ],
      select: null,
      e1: 1,
      steps: 2,
    };
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
    e1(val) {
      if (val>1){
        this.canBefore=true;
      }else {
        this.canBefore=false;
      }
    },
  },

  computed: {
    init() {
      console.log(this.$refs)
    }
  },

  methods: {
    nextStep(n) {
      if (n < this.steps&&this.$refs.form[0].validate()) {
        this.e1 = n + 1;
      }
    },
    beforeStep(n) {
      if (n > 1) {
        this.e1 = n - 1;
      }
    },
    register() {
      console.log(this.$refs)
      if (!this.$refs.form[1].validate()) {
        return;
      }
      this.$axios
        .post("/user/register", this.registerForm)
        .then((response) => {})
        .catch((err) => {});
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
#register {
  width: 500px;
  position: relative;
  text-align: center;
  margin-top: 50px;
}
</style>