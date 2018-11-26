<template>
<v-layout column justify-center align-center>
  <v-flex xs12 sm8 md6>
    <div class="text-xs-center login-wrapper">
      <img class="logo mt-4" src="/logo.png">


      <nuxt-link to="/forgot-password">
        <div class="text-xs-right mt-5 mb-2 body-2 white--text">Forgot Password?</div>
      </nuxt-link>
      <v-form method="post" @submit.prevent="login">
        <v-card class="form-wrapper">
      <v-alert v-if="error" :value="true" type="error">
        {{error}}
      </v-alert>
          <v-text-field type="email" name="email" v-model="email">
            <div class="caption" slot="label">EMAIL</div>
          </v-text-field>
          <v-text-field type="password" name="password" v-model="password">
            <div class="caption" slot="label">PASSWORD</div>
          </v-text-field>
        </v-card>

        <v-flex class="mt-4">
          <v-btn type="submit" block large class="white primary--text">Log in</v-btn>
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
      error: null
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
            device: this.device
          }
        })

        this.$router.push('/dashboard')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
