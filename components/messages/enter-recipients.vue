<template>
<v-container fluid>
  <v-card class="pa-5">
    <div class="mb-4">
      <div class="caption blue-grey--text">MESSAGE TYPE</div>
      <v-radio-group v-model="smsType" row>
        <v-radio label="Immediate" @change="immediate" value="immediate" color="primary"></v-radio>
        <v-radio label="Scheduled" @change="is_scheduled=true" value="scheduled" color="primary"></v-radio>
      </v-radio-group>
    </div>

    <v-layout row wrap>
      <v-flex xs12 sm6 v-if="is_scheduled">
        <div class="caption blue-grey--text">SCHEDULED DATE</div>
        <v-menu v-model="dateMenu" :close-on-content-click="false" full-width max-width="290">
          <v-text-field box append-icon="event" slot="activator" :value="sendDate" readonly>
            <div class="caption" slot="label">Select a schedule date</div>
          </v-text-field>
          <v-date-picker v-model="date" @change="dateMenu = false"></v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>

    <div class="caption blue-grey--text">RECIPIENTS</div>
    <v-text-field hint='Ensure to include "+234" for every entry' persistent-hint type="tel" solo v-model="phone">
      <div class="caption" slot="label">Enter the phone numbers of the recipients separated by comma</div>
    </v-text-field>

    <div class="caption blue-grey--text mt-2">MESSAGE BODY</div>
    <v-textarea class="mb-4" v-model="message" auto-grow box color="primary" rows="8" counter>
      <div class="caption" slot="label">Message</div>
    </v-textarea>

    <v-btn v-if="is_scheduled" xs12 sm6 class="primary caption" @click="sendMessage">SEND MESSAGE</v-btn>
    <v-btn v-else xs12 sm6 class="primary caption" @click="sendMessageImmediate">SEND MESSAGE</v-btn>
  </v-card>
</v-container>
</template>

<script>
import moment from "moment";
export default {
  layout: "dashboard",
  data() {
    return {
      successMessage: '',
      message: '',
      phone: '',
      smsType: 'immediate',
      is_scheduled: false,
      date: '',
      dateMenu: false,
    };
  },
  methods: {
    async sendMessage() {
      const data = {
        message: this.message,
        is_scheduled: this.is_scheduled,
        schedule_date: this.mydate
      }
      await this.$axios.$post(`/sms?phone=${this.trimmedPhone}`, data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        },
      }).then(response => (
        this.$toast.success(response.message, {
          icon: "check"
        })
      ))
    },

    async sendMessageImmediate() {
      const data = {
        is_scheduled: this.is_scheduled,
        message: this.message
      }
      await this.$axios.$post(`/sms?phone=${this.trimmedPhone}`, data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        },
      }).then(response => (
        this.$toast.success(response.message, {
          icon: "check"
        })
      ))
    },

    immediate() {
      this.is_scheduled = false
      this.date = ''
    }
  },

  computed: {
    sendDate() {
      return this.date ? moment(this.date).format("MMMM Do YYYY") : "";
    },
    mydate() {
      let mydate = moment(this.date).toISOString()
      return mydate
    },
    trimmedPhone() {
      return this.phone.split(' ').join('')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>
