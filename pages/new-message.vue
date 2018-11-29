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
              <v-autocomplete v-model="friends" :disabled="isUpdating" :items="people" box chips color="blue-grey lighten-2" label="Select LGA(s)" item-text="name" item-value="name" multiple>

                <template slot="selection" slot-scope="data">
                  <v-chip :selected="data.selected" close class="chip--select-multi" @input="remove(data.item)">
                    {{ data.item.name }}
                  </v-chip>
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
              <v-autocomplete v-model="friends" :disabled="isUpdating" :items="people" box chips color="blue-grey lighten-2" label="Select Ward(s)" item-text="name" item-value="name" multiple>

                <template slot="selection" slot-scope="data">
                  <v-chip :selected="data.selected" close class="chip--select-multi" @input="remove(data.item)">
                    {{ data.item.name }}
                  </v-chip>
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
                      <v-flex xs6 sm4>
                        <v-checkbox color="red" v-model="age" label="20-30" value="20-30"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="red" v-model="age" label="30-40" value="30-40"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="red" v-model="age" label="40-50" value="40-50"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="red" v-model="age" label="50-60" value="50-60"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="red" v-model="age" label="60-70" value="60-70"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="red" v-model="age" label="70-100" value="70-100"></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-layout>
              </v-card>
            </v-flex>

            <v-flex xs12 md6>
              <v-card class="elevation-3">
                <v-layout row>
                  <v-card flat class="blue-grey lighten-1 white--text text-xs-center pa-5" width="100" height="150">
                    <div class="layout justify-center align-center body-2">Gender</div>
                  </v-card>
                  <v-card flat class="py-2 px-3" height="120">
                    <v-layout row wrap>
                      <v-flex xs6>
                        <v-checkbox color="primary" v-model="gender" label="Male" value="Male"></v-checkbox>
                      </v-flex>
                      <v-flex xs6>
                        <v-checkbox color="primary" v-model="gender" label="Female" value="Female"></v-checkbox>
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
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Jan" value="Jan"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Feb" value="Feb"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Mar" value="Mar"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Apr" value="Apr"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="May" value="May"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Jun" value="Jun"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Jul" value="Jul"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Aug" value="Aug"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Sep" value="Sep"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Oct" value="Oct"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Nov" value="Nov"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="green" v-model="dob" label="Dec" value="Dec"></v-checkbox>
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
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Trader" value="20-30"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Lawyer" value="30-40"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Mechanic" value="40-50"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Teacher" value="50-60"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Engineer" value="60-70"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Doctor" value="70-100"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Doctor" value="70-100"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Artist" value="70-100"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Painter" value="70-100"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Driver" value="70-100"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Geologist" value="70-100"></v-checkbox>
                      </v-flex>
                      <v-flex xs6 sm4>
                        <v-checkbox color="pink" v-model="age" label="Psychologist" value="70-100"></v-checkbox>
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
      age: ['20-30', '60-70'],
      gender: ['Female'],
      reward: 'N200',
      group: 'Age 20-30, Male, Trader',
      senderName: 'Tonye Cole',
      contactName: 'Edo Williams',
      recipients: '500,000',
      date: new Date().toISOString().substr(0, 10),
      dateMenu: false,
      messageBody: '',
      autoUpdate: true,
      friends: ['Epele', 'Port Harcourt'],
      isUpdating: false,
      people: [{
          header: 'Group 1'
        },
        {
          name: 'Epele',
          group: 'Group 1'
        },
        {
          name: 'Jelowa',
          group: 'Group 1'
        },
        {
          name: 'Gada',
          group: 'Group 1'
        },
        {
          name: 'Yenkuy',
          group: 'Group 1'
        },
        {
          divider: true
        },
        {
          header: 'Group 2'
        },
        {
          name: 'Britaro',
          group: 'Group 2'
        },
        {
          name: 'Port Harcourt',
          group: 'Group 2'
        },
        {
          name: 'Jowa',
          group: 'Group 2'
        },
        {
          name: 'nilope',
          group: 'Group 2'
        }
      ]
    }
  },
  computed: {
    sendDate() {
      return this.date ? moment(this.date).format('MMMM Do YYYY') : ''
    }
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    }
  },

  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    }
  }
}
</script>
