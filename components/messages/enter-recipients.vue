<template>
<v-container fluid>
  <v-card class="pa-5">
    <div class="caption blue-grey--text">RECIPIENTS</div>
    <v-text-field type="tel" solo v-model="phone">
      <div class="caption" slot="label">Enter the phone numbers of the recipients separated by comma</div>
    </v-text-field>

    <div class="caption blue-grey--text mt-2">MESSAGE BODY</div>
    <v-textarea class="mb-4" v-model="message" auto-grow box color="primary" rows="8" counter>
      <div class="caption" slot="label">Message</div>
    </v-textarea>

    <v-btn xs12 sm6 @click="sendMessage" class="primary caption ">SEND MESSAGE</v-btn>
  </v-card>
</v-container>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      message: '',
      phone: ''
    };
  },
  methods: {
    async sendMessage() {
      const data = {
        message: this.message
      }
      await this.$axios.$post(`/sms?phone=${this.phone}`, data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        },
      }).then(function (response) {})
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>
