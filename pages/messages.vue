<template>
<section>
  <v-layout mb-5>
    <div class="headline">Messages</div> &nbsp;&nbsp;&nbsp;&nbsp; <div class="headline primary--text">6</div>
    <v-layout class="justify-end">
      <v-btn to="/new-contact" class="primary caption">
        <v-icon>add</v-icon> NEW MESSAGE
      </v-btn>
    </v-layout>
  </v-layout>

  <v-btn-toggle v-model="text" class="mb-2">
    <v-btn flat value="day" class="caption multiple-btn">
      DAY
    </v-btn>
    <v-btn flat value="month" class="caption multiple-btn">
      MONTH
    </v-btn>
    <v-btn flat value="year" class="caption multiple-btn">
      YEAR
    </v-btn>
  </v-btn-toggle>

  <v-card>
    <v-card-title>
    </v-card-title>
    <v-data-table :headers="headers" :items="messages" :search="search">
      <template slot="items" slot-scope="props">
        <tr>
          <td>{{ props.item.status }}</td>
          <td>{{ props.item.recipients }}</td>
          <td>{{ props.item.reward }}</td>
          <td>{{ props.item.message }}</td>
          <td>{{ props.item.date }}</td>
          <td class="justify-center layout px-0">
            <v-flex mt-2 class="text-xs-center">
              <v-btn icon to="/message-detail">
                <v-icon small class="green--text">visibility</v-icon>
              </v-btn>
            </v-flex>
          </td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</section>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      text: 'day',
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
          text: 'Reward',
          value: 'reward'
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
          sortable: false
        }
      ],
      messages: [{
          value: false,
          status: 'Scheduled',
          recipients: 159,
          reward: '₦6.0',
          message: 'Hey My name is Edo Williams. Please vote for me today!',
          date: 'November 1st, 2018'
        },
        {
          value: false,
          status: 'Sent',
          recipients: 237,
          reward: '₦9.0',
          message: 'Hey My name is Edo Williams. Please vote for me today!',
          date: 'November 1st, 2018'
        },
        {
          value: false,
          status: 'Scheduled',
          recipients: 262,
          reward: '₦16.0',
          message: 'Hey My name is Edo Williams. Please vote for me today!',
          date: 'November 1st, 2018'
        },
        {
          value: false,
          status: 'Sent',
          recipients: 305,
          reward: '₦3.7',
          message: 'Hey My name is Edo Williams. Please vote for me today!',
          date: 'November 1st, 2018'
        },
        {
          value: false,
          status: 'Scheduled',
          recipients: 356,
          reward: '₦16.0',
          message: 'Hey My name is Edo Williams. Please vote for me today!',
          date: 'November 1st, 2018'
        },
        {
          value: false,
          status: 'Sent',
          recipients: 375,
          reward: '₦0.0',
          message: 'Hey My name is Edo Williams. Please vote for me today!',
          date: 'November 1st, 2018'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.multiple-btn {
  width: 100px;
}
</style>
