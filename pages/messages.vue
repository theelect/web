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
          <div class="mb-5 text-xs-center font-weight-bold primary--text">VIEW MESSAGE DETAIL</div>

          <v-layout row wrap>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">RECIPIENTS</div>
              <div v-text="editedItem.number_of_recipient" class="font-weight-bold"></div>
            </v-flex>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">SCHEDULED DATE</div>
              <div class="font-weight-bold">{{ editedItem.scheduledDate | formatDate }}</div>
            </v-flex>
          </v-layout>

          <v-layout row wrap mt-5>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">SENDER'S NAME</div>
              <div class="font-weight-bold">Tonye Cole</div>
            </v-flex>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">STATUS</div>
              <div class="font-weight-bold" v-text="editedItem.status"></div>
            </v-flex>
          </v-layout>

          <v-flex mt-5>
            <div class="caption blue-grey--text mb-2">MESSAGE</div>
            <div class="pa-4 blue-grey lighten-5" v-text="editedItem.message"></div>
          </v-flex>

          <v-layout mt-5>
            <v-btn block @click="dialog=false" dark class="red caption">CLOSE</v-btn>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="editDialog" max-width="550px">
      <v-card class="pa-5">
        <div class="mb-4 text-xs-center font-weight-bold primary--text">EDIT SCHEDULED MESSAGE</div>

        <div><span class="font-weight-bold">Scheduled Date: </span>{{ editedItem.scheduledDate | formatDate }} <span @click="menu1 = true" class="ml-4 change primary--text">Change</span></div>
        <div v-if="date != ''" class="mt-2"><span class="font-weight-bold">New Scheduled Date: </span>{{ date | formatDate }}</div>

        <v-dialog v-model="menu1" max-width="290">
          <v-date-picker v-model="date" :show-current="false" @change="menu1 = false"></v-date-picker>
        </v-dialog>

        <div class="caption blue-grey--text mt-4">MESSAGE BODY</div>
        <v-textarea class="mb-4" v-model="editedItem.message" auto-grow box color="primary" rows="6" counter>
          <div class="caption" slot="label">Message</div>
        </v-textarea>

        <v-btn block color="primary" class="caption" @click="updateMessage">Update Message</v-btn>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title></v-card-title>
      <v-data-table :headers="headers" :items="messages">
        <!-- <v-progress-linear id="noData" slot="no-data" color="blue" indeterminate></v-progress-linear> -->
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ props.item.status }}</td>
            <td>{{ props.item.number_of_recipient }}</td>
            <td>{{ props.item.message }}</td>
            <td style="width:12%">{{ props.item.createdAt | formatDate }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2 primary--text" @click="viewItem(props.item)">
                visibility
              </v-icon>
              <v-icon :disabled="!props.item.is_scheduled" small class="mr-2" color="green" @click="editItem(props.item)">
                edit
              </v-icon>
              <v-icon :disabled="!props.item.is_scheduled" small color="red" @click="deleteItem(props.item)">
                delete
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
      date: '',
      menu1: false,
      editDialog: false,
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
    viewItem(item) {
      this.editedIndex = this.messages.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    editItem(item) {
      this.editedIndex = this.messages.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editDialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.messages.indexOf(item)
      this.editedItem = Object.assign({}, item)
      // alert('Are you sure you want to delete this message?')
      if (confirm("Are you sure you want to delete this message?")) {
        this.$axios.delete(`/sms/scheduled/${this.editedItem._id}`, {
          headers: {
            apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
          }
        }).then(response => {
          this.$toast.success('Message successfully deleted', {
            icon: "check"
          });
          location.reload();
        }).catch(e => {
          console.log(e);
        })
      }
    },

    async updateMessage() {
      this.$toast.show('Updating scheduled message...', {
        icon: "fingerprint"
      });
      const data = {
        schedule_date: this.mydate,
        message: this.editedItem.message
      }
      await this.$axios.patch(`/sms/scheduled/${this.editedItem._id}`, data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      }).then(response => {
        this.$toast.success('Successfully updated the message', {
          icon: "check"
        });
        this.editDialog = false;
        location.reload();
      }).catch(e => {
        console.log(e);
      })
    }
  },

  mounted() {
    // setTimeout(() => (document.getElementById('noData').style.display = 'none'), 20000)    
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
  },

  computed: {
    mydate() {
      let mydate = moment(this.date).toISOString()
      return mydate
    },
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.multiple-btn {
  width: 100px;
}

.change {
  cursor: pointer;
}
</style>
