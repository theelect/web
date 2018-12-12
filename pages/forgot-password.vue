<template>
<v-layout column justify-center align-center>
  <v-flex xs12 sm8 md6>
    <div class="text-xs-center login-wrapper">
      <img class="logo mt-4" src="/logo.png">

      <v-form>
        <v-card class="form-wrapper mt-5">
          <v-text-field type="email" name="email" v-model="email">
            <div class="caption" slot="label">EMAIL</div>
          </v-text-field>
        </v-card>

        <div class="white--text mt-1">We will send you an email with further instructions on how to reset your password</div>

        <v-flex class="mt-4">
          <v-btn @click="submit" block large class="white primary--text">Submit</v-btn>
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
      email: ''
    }
  },
  methods: {
    async submit() {
      this.$toast.show('Processing...', {
        icon: "fingerprint"
      });
      await this.$axios.post('https://theelect.herokuapp.com/api/v1/request-password-reset', {
        email: this.email
      }).then(response => {
        this.$toast.success(response, {
          icon: "check"
        });
      })
    }
  }
}
</script>
