<template>
<v-layout column justify-center align-center>
  <v-flex xs12 sm8 md6>
    <div class="text-xs-center login-wrapper">
      <img class="logo mt-4" src="/logo.png">

      <nuxt-link to="/forgot-password">
        <div class="text-xs-right mt-5 mb-2 body-2 white--text">Forgot Password?</div>
      </nuxt-link>
      <v-form ref="authForm" v-model="authValid" lazy-validation>
        <v-card class="form-wrapper">
          <v-text-field :rules="emailRules" type="email" name="email" v-model="email">
            <div class="caption" slot="label">EMAIL</div>
          </v-text-field>
          <v-text-field :append-icon="e3 ? 'visibility' : 'visibility_off'" @click:append="() => (e3 = !e3)" @keyup.enter="login" class="mt-1" :type="e3 ? 'password' : 'text'" name="password" :rules="passwordRules" v-model="password" required>
            <div class="caption" slot="label">PASSWORD</div>
          </v-text-field>
        </v-card>

        <v-flex class="mt-4">
          <v-btn :disabled="!authValid" @click="login" block large class="white primary--text">Log in</v-btn>
          <v-checkbox color="white" dark label="Remember me" v-model="rememberMe"></v-checkbox>
        </v-flex>
      </v-form>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      rememberMe: false,
      email: '',
      password: '',
      device: 'web',
      authValid: false,
      e3: true,
      e1: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v.length > 1) || 'Must be at least 2 characters'
      ]
    }
  },
  methods: {
    async login() {
      this.$toast.show('Logging in...', {
        icon: "fingerprint"
      });
      if (this.$refs.authForm.validate()) {
        const data = {
          email: this.email,
          password: this.password,
          device: this.device
        }
        await this.$store.dispatch('login', data)
        await this.$store.dispatch('userDetails')
        this.$toast.success('Successfully Logged In', {
          icon: "check"
        });
        this.$router.push(`/dashboard`)
      }
    }
  }
}
</script>
