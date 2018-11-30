<template>
<v-container fluid>
  <v-flex mb-5>
    <v-btn class="primary my-btn" to="/messages" dark>
      <v-icon large>arrow_left</v-icon>
    </v-btn>
    <div class="d-inline">
      <div class="title d-inline ml-2">New Message</div>
    </div>
  </v-flex>

  <v-card class="pa-5">
    <div class="caption blue-grey--text">RECIPIENTS</div>
    <v-text-field type="tel" solo v-model="recipients">
      <div class="caption" slot="label">Enter the phone numbers of the recipients separated by comma</div>
    </v-text-field>

    <div class="caption blue-grey--text mt-2">MESSAGE BODY</div>
    <v-textarea class="mb-4" v-model="messageBody" auto-grow box color="primary" rows="8" counter>
      <div class="caption" slot="label">Message</div>
    </v-textarea>

    <v-btn xs12 sm6 @click="sendMessage" class="primary caption ">SEND MESSAGE</v-btn>
    <v-btn @click="step = 1" xs12 sm6 dark class="red caption">BACK</v-btn>
  </v-card>
</v-container>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      recipients: [],
      messageBody: ''
    }
  },
  methods: {
    async sendMessage() {
      this.$toast.show('Sending...', {
        icon: "fingerprint"
      });
      const data = {
        recipients: this.recipients,
        body: this.messageBody,
        sender : "Street",
        recipients_type : "custom",
        age_bracket : [],
        marital_status : [],
        birth_month : [],
        groups : [],
        states : [],
        locals : []
      }
      await this.$axios.post('https://theelect-smsapi.herokuapp.com/index.php/api/message?api_token=2f66686be77a3eff684cead289fabe873c8032dfaf8a3fc8c13b4a6dd26c2b89', data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.$toast.success('Message sent successfully', {
          icon: "check"
        });
        this.$router.push(`/messages`);
      }).catch(e => {
        console.log(e);
      })
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>
