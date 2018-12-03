<template>
<v-container fluid>
  <v-card class="pa-5">
    <div class="caption blue-grey--text">RECIPIENTS</div>
    <v-text-field type="tel" solo v-model="recipients">
      <div class="caption" slot="label">Enter the phone numbers of the recipients separated by comma</div>
    </v-text-field>

    <div class="caption blue-grey--text mt-2">MESSAGE BODY</div>
    <v-textarea class="mb-4" v-model="body" auto-grow box color="primary" rows="8" counter>
      <div class="caption" slot="label">Message</div>
    </v-textarea>

    <v-btn xs12 sm6 @click="sendMessage" class="primary caption ">SEND MESSAGE</v-btn>
  </v-card>
</v-container>
</template>

<script>
import moment from "moment";
let sms_url = "https://theelect-smsapi.herokuapp.com/index.php/api";
import axios from "axios";
export default {
  layout: "dashboard",
  data() {
    return {
      step: 1,
      sender: "Tonye Cole",
      recipients: "",
      date: new Date().toISOString().substr(0, 10),
      dateMenu: false,
      body: "",
      autoUpdate: true,

      isUpdating: false,
      group: "",
      error: false,
      error_message: '',
      success: false,
      success_message: ''

    };
  },
  computed: {
    sendDate() {
      return this.date ? moment(this.date).format("MMMM Do YYYY") : "";
    }
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },
  methods: {
    async sendMessage() {
      try {
        this.$toast.show('Sending...', {
            icon: "fingerprint"
          });
        this.error = this.success = false;

        let body = {
          body: this.body,
          recipients_type: 'custom',
          scheduled: 0,
          sender: this.sender,
          recipients: this.recipients.split(',')
        }
        let response = await axios.post(`${sms_url}/message?api_token=2f66686b`, body);

        let {
          status,
          data
        } = response.data;

        if (status == false) {
          this.error = true;
          this.step = 1;
          this.error_message = data;

        } else {
          this.success = true;
          this.step = 1;
          this.success_message = 'Message has been queued successfully.'
          this.$toast.success('Message has been queued successfully.', {
            icon: "check"
          });
          setTimeout(() => this.$router.push(`/messages`), 2000)
        }

      } catch (ex) {
        this.error = true;
        this.step = 1;
        this.error_message = ex.message.toString()
      }
    }

  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>
