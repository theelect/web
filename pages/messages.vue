<template>
<section>
  <v-container fluid>
    <v-layout mb-5>
      <div class="headline" style="margin-right:5px;">Messages</div>
      <div class="headline primary--text">({{messages_count}})</div>
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
              <div v-text="editedItem.recipients" class="font-weight-bold title"></div>
            </v-flex>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">SCHEDULED DATE</div>
              <div v-text="editedItem.date" class="font-weight-bold title"></div>
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
            <div class="" v-text="editedItem.body"></div>
          </v-flex>

          <v-layout mt-5>
            <v-btn @click="dialog=false" dark class="red caption">CLOSE</v-btn>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title></v-card-title>
      <v-data-table :headers="headers" :items="messages" :search="search">
        <v-progress-linear slot="no-data" color="blue" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ props.item.status }}</td>
            <td>{{ props.item.recipients }}</td>
            <td>{{ props.item.body }}</td>
            <td style="width:12%">{{ props.item.date }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2 primary--text" @click="editItem(props.item)">
                visibility
              </v-icon>
            </td>
          </tr>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
    </v-card>

  </v-container>
</section>
</template>

<script>
import axios from 'axios';

export default {

  layout: 'dashboard',

  data() {

    return {
      dialog: false,
      timeSort: 'day',
      statusSort: 'all',
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
    try {
      let payload = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 2f66686b'
        }
      }
      let response = await axios.get('https://theelect-smsapi.herokuapp.com/index.php/api/messages/all', payload);

      let {
        status,
        data
      } = response.data;

      if (status != false) {

        this.messages = data;
        this.messages_count = data.length;
      }

    } catch (ex) {
      console.error(ex);
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.messages.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    }
  }

}
</script>

<style lang="scss" scoped>
.multiple-btn {
  width: 100px;
}
</style>
