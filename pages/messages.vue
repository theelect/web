<template>
<section>
  <v-container fluid>
    <v-layout mb-5>
      <div class="headline" style="margin-right:5px;">Messages:</div>
      <div class="headline primary--text ml-2">{{ stats.total_sent_sms }}</div>
      <v-layout class="justify-end">
        <v-btn to="/new-message" class="primary caption">
          <v-icon>add</v-icon>NEW MESSAGE
        </v-btn>
      </v-layout>
    </v-layout>

    <v-dialog v-model="dialog" max-width="450px">
      <v-card class="pa-4">
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">RECIPIENTS</div>
              <div v-text="editedItem.number_of_recipient" class="font-weight-bold title"></div>
            </v-flex>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">SCHEDULED DATE</div>
              <div class="font-weight-bold title">{{ editedItem.createdAt | formatDate }}</div>
            </v-flex>
          </v-layout>

          <v-layout row wrap mt-5>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">SENDER'S NAME</div>
              <div class="font-weight-bold title">Tonye Cole</div>
            </v-flex>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">STATUS</div>
              <div class="font-weight-bold title" v-text="editedItem.status"></div>
            </v-flex>
          </v-layout>

          <v-flex mt-5>
            <div class="caption blue-grey--text mb-2">MESSAGE</div>
            <div class="" v-text="editedItem.message"></div>
          </v-flex>

          <v-layout mt-5>
            <v-btn @click="dialog=false" dark class="red caption">CLOSE</v-btn>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title></v-card-title>
      <v-data-table :headers="headers" :items="messages">
        <v-progress-linear slot="no-data" color="blue" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ props.item.status }}</td>
            <td>{{ props.item.number_of_recipient }}</td>
            <td>{{ props.item.message }}</td>
            <td style="width:12%">{{ props.item.createdAt | formatDate }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2 primary--text" @click="editItem(props.item)">
                visibility
              </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

  </v-container>
</section>
</template>

<script>
import moment from "moment";
export default {

  layout: 'dashboard',

  data() {

    return {
      dialog: false,
      timeSort: 'day',
      statusSort: 'all',
      scheduleStatus: null,
      search: '',
      headers: [{
          text: 'Status',
          align: 'left',
          value: 'status'
        },
        {
          text: 'Recipients',
          value: 'recipients'
        },
        {
          text: 'Message',
          value: 'message'
        },
        {
          text: 'Date',
          value: 'date'
        },
        {
          text: 'Actions',
          value: 'name',
          align: 'center',
          sortable: false
        }
      ],
      messages: [],
      stats: {},
      messages_count: 0,
      editedIndex: -1,
      editedItem: {
        status: '',
        recipients: '',
        body: '',
        date: ''
      },
      defaultItem: {
        status: '',
        recipients: '',
        body: '',
        date: ''
      }
    }
  },
  created: async function () {
    this.$axios.$get('/sms', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    }).then(response => (this.messages = response, this.scheduleStatus = response.is_scheduled))

    this.$axios.$get('/sms-stats', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    }).then(response => (this.stats = response))
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.messages.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    }
  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    formatDate: function (date) {
      if (!date) return ''
      date = date.substr(0, 10)
      return date ? moment(date).format('MMM Do YYYY') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.multiple-btn {
  width: 100px;
}
</style>
