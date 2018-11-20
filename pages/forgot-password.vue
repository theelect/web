<template>
<v-layout column justify-center align-center>
  <v-flex xs12 sm8 md6>
    <div class="text-xs-center login-wrapper">
      <img class="logo mt-4" src="/logo.png">

      <v-card class="form-wrapper mt-5">
        <v-text-field type="email">
          <div class="caption" slot="label">EMAIL</div>
        </v-text-field>
      </v-card>

      <div class="white--text mt-1">We will send you an email with further instructions on how to reset your password</div>

      <v-flex class="mt-4">
        <v-btn block large class="white primary--text">Submit</v-btn>
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
