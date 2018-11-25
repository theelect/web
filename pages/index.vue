<template>
<v-layout column justify-center align-center>
  <v-flex xs12 sm8 md6>
    <div class="text-xs-center login-wrapper">
      <img class="logo mt-4" src="/logo.png">

      <nuxt-link to="/forgot-password">
        <div class="text-xs-right mt-5 mb-2 body-2 white--text">Forgot Password?</div>
      </nuxt-link>
      <v-card class="form-wrapper">
        <v-form>
          <v-text-field type="email">
            <div class="caption" slot="label">EMAIL</div>
          </v-text-field>
          <v-text-field type="password" label="PASSWORD">
            <div class="caption" slot="label">PASSWORD</div>
          </v-text-field>
        </v-form>
      </v-card>

      <v-flex class="mt-4">
        <v-btn to="/dashboard" block large class="white primary--text">Log in</v-btn>
        <v-checkbox color="white" dark label="Remember me" v-model="rememberMe"></v-checkbox>
      </v-flex>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      rememberMe: false
    }
  }
}
</script>
