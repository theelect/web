<template>
<v-container fluid>
  <v-card class="pa-5">
    <div class="mb-5">
      <div class="caption blue-grey--text">RECIPIENTS</div>
      <div class="title my-3">Male: <span class="font-weight-regular primary--text">{{ reach.gender.male }}</span></div>
      <div class="title my-3">Female: <span class="font-weight-regular primary--text">{{ reach.gender.female }}</span></div>
      <div class="title my-3">LGAs: <span class="font-weight-regular primary--text">{{ reach.lga }}</span></div>
      <div class="title">Total Reach: <span class="font-weight-regular primary--text">{{ reach.total }}</span></div>
    </div>

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
      message: ''
    };
  },
  methods: {
    async sendMessage() {
      const data = {
        message: this.message
      }
      await this.$axios.$post('/sms', data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        },
      }).then(function (response) {})
    }
  },
  created : async function(){
    await this.$store.dispatch('reach')
  },
  computed: {
    reach() {
      return this.$store.getters.reach
    }
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>
