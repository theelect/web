<template>
<v-layout column justify-center align-center>
  <v-flex xs12 sm8 md6>
    <div class="text-xs-center login-wrapper">
      <nuxt-link to="/">
        <img class="logo mt-4" src="/logo.png">
      </nuxt-link>

        <v-form>
          <v-card class="form-wrapper mt-5">
            <v-text-field name="pin" type="text" v-model="pin" persistent-hint hint="Check your email for this pin">
              <div class="caption" slot="label">PIN</div>
            </v-text-field>

            <v-text-field name="password" type="password" v-model="password">
              <div class="caption" slot="label">PASSWORD</div>
            </v-text-field>
          </v-card>

          <div class="white--text mt-1">Kindly enter the pin sent to your email and your new password</div>

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
      pin: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      this.$toast.show('Processing...', {
        icon: "fingerprint"
      });
      await this.$axios.post('https://theelect.herokuapp.com/api/v1/update-password', {
        code: this.pin,
        password: this.password
      }).then(response => {
        this.$toast.success('Password changed successfully', {
          icon: "check"
        });
      })
      this.$router.push(`/`);
    }
  }
}
</script>
