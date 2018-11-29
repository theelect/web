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
        <v-card flat class="mb-5">
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-autocomplete v-model="local" :disabled="isUpdating" :items="locals" box chips color="blue-grey lighten-2" label="Select LGA(s)" item-text="name" item-value="name" multiple>
                  <template slot="selection" slot-scope="data">
                    <v-chip :selected="data.selected" close class="chip--select-multi" @input="remove(data.item)">{{ data.item.name }}</v-chip>
                  </template>
                  <template slot="item" slot-scope="data">
                    <template v-if="typeof data.item !== 'object'">
                      <v-list-tile-content v-text="data.item"></v-list-tile-content>
                    </template>
                    <template v-else>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </template>
                  </template>
                </v-autocomplete>
              </v-flex>

              <v-flex xs12 sm6>
                <v-autocomplete v-model="ward" :disabled="isUpdating" :items="wards" box chips color="blue-grey lighten-2" label="Select Wards(s)" tem-text="name" item-value="name" multiple>
                  <template slot="selection" slot-scope="data">
                    <v-chip :selected="data.selected" close class="chip--select-multi" @input="remove(data.item)" >{{ data.item.name }}</v-chip>
                  </template>
                  <template slot="item" slot-scope="data">
                    <template v-if="typeof data.item !== 'object'">
                      <v-list-tile-content v-text="data.item"></v-list-tile-content>
                    </template>
                    <template v-else>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </template>
                  </template>
                </v-autocomplete>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-card class="elevation-3">
                  <v-layout row>
                    <v-card flat class="blue-grey lighten-1 white--text text-xs-center pa-5" width="100" height="150">
                      <div class="layout justify-center align-center body-2">Age</div>
                    </v-card>
                    <v-card flat class="py-2 px-3" height="120">
                      <v-layout row wrap>
                        <v-flex xs6 sm4 v-for="row in ages" :key="row">
                          <v-checkbox color="red" v-model="age" v-bind:label="row" v-bind:value="row"></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-layout>
                </v-card>
              </v-flex>

              <v-flex xs12 md6>
                <v-card class="elevation-3">
                  <v-layout row>
                    <v-card flat class="blue-grey lighten-1 white--text text-xs-center pa-5" width="100" height="150" >
                      <div class="layout justify-center align-center body-2">Gender</div>
                    </v-card>
                    <v-card flat class="py-2 px-3" height="120">
                      <v-layout row wrap>
                        <v-flex xs6 v-for="row in genders" :key="row">
                          <v-checkbox color="primary" v-model="gender" v-bind:label="row" v-bind:value="row"></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>

            <v-layout row wrap mt-4>
              <v-flex xs12 md6>
                <v-card class="elevation-3">
                  <v-layout row>
                    <v-card flat class="blue-grey lighten-1 white--text text-xs-center pa-5" width="100" height="300">
                      <div class="layout justify-center align-center body-2">Date of Birth (Month)</div>
                    </v-card>
                    <v-card flat class="py-2 px-3" height="120">
                      <v-layout row wrap>
                        <v-flex xs6 sm4 v-for="row in months" :key="row">
                          <v-checkbox color="green" v-model="month" v-bind:label="row" v-bind:value="row"
                          ></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-layout>
                </v-card>
              </v-flex>

              <v-flex xs12 md6>
                <v-card class="elevation-3">
                  <v-layout row>
                    <v-card flat class="blue-grey lighten-1 white--text text-xs-center pa-5" width="100" height="300">
                      <div class="layout justify-center align-center body-2">Profession</div>
                    </v-card>
                    <v-card flat class="py-2 px-3" height="120">
                      <v-layout row wrap>
                        <v-flex xs6 sm4 v-for="row in occupations" :key="row">
                          <v-checkbox color="pink" v-model="occupation" v-bind:label="row" v-bind:value="row"
                          ></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-container grid-list-md>
          <v-btn @click="submit" xs12 sm6 class="primary caption">CONTINUE</v-btn>
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
import moment from "moment";
let sms_url = "http://localhost:8000/api";
import axios from "axios";
export default {
  layout: "dashboard",
  data() {
    return {
      step: 1,
      reward: "N200",
      group: "Age 20-30, Male, Trader",
      senderName: "Tonye Cole",
      contactName: "Edo Williams",
      recipients: "500,000",
      date: new Date().toISOString().substr(0, 10),
      dateMenu: false,
      messageBody: "",
      autoUpdate: true,

      age: [],
      gender: [],
      month: [],
      occupation: [],
      local: [],
      locals: [],
      ward: [],
      wards: [],
      ages: ["20-30", "30-40", "50-60", "60-70", "70-100"],
      genders: ["Male", "Female"],
      months: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      occupations: [
        "Teacher",
        "Lawyer",
        "Mechanic",
        "Engineer",
        "Doctor",
        "Artist",
        "Painter",
        "Driver",
        "Geologist"
      ],
      items: [],
      isUpdating: false
    };
  },
  created: async function() {
    let locals = await axios.get(`${sms_url}/locals`);
    this.locals = locals.data.data;

    let wards = await axios.get(`${sms_url}/wards`);
    this.wards = wards.data.data;
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
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },

    submit() {
      let payload = {
        local: this.local,
        wards: this.wards,
        ages: this.age,
        genders: this.gender,
        months: this.month,
        profession: this.occupation
      };
			this.step = 2;
      console.log(payload);
    }
  }
};
</script>
