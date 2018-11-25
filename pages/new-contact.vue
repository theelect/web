<template>
<section>
  <v-container fluid>
    <div class="headline mb-5">New Contact</div>

    <v-card flat class="pa-4">
      <v-container grid-list-md>
        <div class="mb-1">GROUP</div>
        <v-layout row>
          <v-card flat width="260">
            <v-select :items="groups" solo>
              <div class="caption" slot="label">Select a group</div>
            </v-select>
          </v-card>
          &nbsp;&nbsp;&nbsp;
          <v-btn class="primary my-btn" dark>
            <v-icon>add</v-icon>
          </v-btn>
        </v-layout>
      </v-container>

      <v-container grid-list-md>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 sm5>
            <v-text-field solo>
              <div class="caption" slot="label">NAME</div>
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm5>
            <v-text-field type="tel" solo>
              <div class="caption" slot="label">PHONE</div>
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <div class="mt-4 mb-1">DATE OF BIRTH</div>
            <v-menu v-model="dateMenu" :close-on-content-click="false" full-width max-width="290">
              <v-text-field append-icon="event" solo slot="activator" :value="dateOfBirth" label="Date of birth" readonly></v-text-field>
              <v-date-picker v-model="date" @change="dateMenu = false"></v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 sm4>
            <div class="mt-4 mb-1">STATE</div>
            <v-select :items="states" solo>
              <div class="caption" slot="label">Select a state</div>
            </v-select>
          </v-flex>

          <v-flex xs12 sm4>
            <div class="mt-4 mb-1">LOCAL GOVERNMENT AREA</div>
            <v-select :items="lgas" solo>
              <div class="caption" slot="label">Select a LGA</div>
            </v-select>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-md>
        <v-layout row wrap justify-end mt-4>
          <v-btn xs12 sm6 class="primary caption">CREATE CONTACT</v-btn>
          <v-btn xs12 sm6 dark class="red caption cancel-btn">CANCEL</v-btn>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</section>
</template>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}

.my-btn {
  width: 49px;
  height: 49px;
}

.input-wrapper {
  max-width: 400px !important;
}

.create-btn {
  margin-bottom: 5px !important;
}
</style>

<script>
import moment from 'moment'
export default {
  layout: 'dashboard',
  data: () => ({
    groups: ['My First Group', 'Second Group', 'Campaign Now', 'Opportunity Status'],
    states: ['Lagos', 'Rivers', 'Osun', 'Kwara'],
    lgas: ['Alimosho', 'Lagos Island', 'Ikeja', 'Agege'],
    date: new Date().toISOString().substr(0, 10),
    dateMenu: false
  }),
  computed: {
    dateOfBirth() {
      return this.date ? moment(this.date).format('MMMM Do YYYY') : ''
    }
  }
}
</script>
