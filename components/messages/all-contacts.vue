<template>
<v-container fluid>
  <v-card class="pa-5">
    <v-flex v-if="reach" class="mb-5">
      <div class="caption blue-grey--text">RECIPIENTS</div>
      <div class="title my-3">Male: <span class="font-weight-regular primary--text">{{ reach.gender.male }}</span></div>
      <div class="title my-3">Female: <span class="font-weight-regular primary--text">{{ reach.gender.female }}</span></div>
      <div class="title my-3">LGAs: <span class="font-weight-regular primary--text">{{ reach.lga }}</span></div>
      <div class="title">Total Reach: <span class="font-weight-regular primary--text">{{ reach.total }}</span></div>
    </v-flex>

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
      message: '',
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
      await this.$axios.$post('/sms', data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        },
      }).then(response => {
        this.$toast.success(response.message, {
          icon: "check"
        });
        this.$router.push('/messages')
      })

    },

    async sendMessageImmediate() {
      const data = {
        is_scheduled: this.is_scheduled,
        message: this.message
      }
      await this.$axios.$post('/sms', data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        },
      }).then(response => {
        this.$toast.success(response.message, {
          icon: "check"
        })
        this.$router.push('/messages')
      })
    },

    immediate() {
      this.is_scheduled = false
      this.date = ''
    }
  },
  beforeCreate: async function () {
    await this.$store.dispatch('reach')
  },
  computed: {
    stats() {
      return this.$store.getters.reach
    },
    reach() {
      // if (this.stats) {
      //   return this.$store.getters.reach
      // }else {
      //   return null
      // }
      return this.$store.getters.reach
    },
    sendDate() {
      return this.date ? moment(this.date).format("MMMM Do YYYY") : "";
    },
    mydate() {
      let mydate = moment(this.date).toISOString()
      return mydate
    }
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>
