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

  <v-stepper v-model="step" vertical>
    <v-stepper-step editable :complete="step > 1" step="1">
      Recipients
      <small>Who are you sending this message to?</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card class="mb-5">

      </v-card>
      <v-container grid-list-md>
        <v-btn @click="step = 2" xs12 sm6 class="primary caption">CONTINUE</v-btn>
        <v-btn xs12 sm6 dark class="red caption">CANCEL</v-btn>
      </v-container>
    </v-stepper-content>

    <v-stepper-step :complete="step > 2" step="2">Content</v-stepper-step>

    <v-stepper-content step="2">
      <v-card flat class="mb-5">
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm8>
              <div class="caption blue-grey--text">GROUP</div>
              <v-text-field disabled v-model="group"></v-text-field>
            </v-flex>

            <v-flex xs12 sm4>
              <div class="caption blue-grey--text">SCHEDULED DATE</div>
              <v-menu v-model="dateMenu" :close-on-content-click="false" full-width max-width="290">
                <v-text-field append-icon="event" slot="activator" :value="sendDate" readonly></v-text-field>
                <v-date-picker v-model="date" @change="dateMenu = false"></v-date-picker>
              </v-menu>
            </v-flex>

            <v-flex xs12 sm4>
              <div class="caption blue-grey--text">SENDER'S NAME</div>
              <v-text-field disabled v-model="senderName"></v-text-field>
            </v-flex>

            <v-flex xs12 sm4>
              <div class="caption blue-grey--text">CONTACT NAME</div>
              <v-text-field disabled v-model="contactName"></v-text-field>
            </v-flex>

            <v-flex xs12 sm4>
              <div class="caption blue-grey--text">RECIPIENTS</div>
              <v-text-field disabled v-model="recipients"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>

        <v-container>
          <v-textarea v-model="messageBody" auto-grow box color="primary" rows="8" counter>
            <div class="caption" slot="label">Message</div>
          </v-textarea>
        </v-container>

      </v-card>
      <v-container grid-list-md>
        <v-btn xs12 sm6 class="primary caption">SEND MESSAGE</v-btn>
        <v-btn @click="step = 1" xs12 sm6 dark class="red caption">BACK</v-btn>
      </v-container>
    </v-stepper-content>
  </v-stepper>
</v-container>
</template>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>

<script>
import moment from 'moment'
export default {
  layout: 'dashboard',
  data() {
    return {
      step: 1,
      reward: 'N200',
      group: 'Age 20-30, Male, Trader',
      senderName: 'Tonye Cole',
      contactName: 'Edo Williams',
      recipients: '500,000',
      date: new Date().toISOString().substr(0, 10),
      dateMenu: false,
      messageBody: ''
    }
  },
  computed: {
    sendDate() {
      return this.date ? moment(this.date).format('MMMM Do YYYY') : ''
    }
  }
}
</script>
