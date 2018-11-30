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

      <v-layout row wrap pl-5>
        <v-flex md8>
          <v-btn-toggle v-model="timeSort" class="mb-2">
            <v-btn flat value="day" class="caption multiple-btn">DAY</v-btn>
            <v-btn flat value="month" class="caption multiple-btn">MONTH</v-btn>
            <v-btn flat value="year" class="caption multiple-btn">YEAR</v-btn>
          </v-btn-toggle>
        </v-flex>

        <v-flex md4>
          <v-btn-toggle v-model="statusSort" class="mb-2">
            <v-btn flat value="all" class="caption multiple-btn">ALL</v-btn>
            <v-btn flat value="sent" class="caption multiple-btn">SENT</v-btn>
            <v-btn flat value="scheduled" class="caption multiple-btn">SCHEDULED</v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>

      <v-card>
        <v-card-title></v-card-title>
        <v-data-table :headers="headers" :items="messages" :search="search">
          <template slot="items" slot-scope="props">
            <tr>
              <td>{{ props.item.status }}</td>
              <td>{{ props.item.recipients }}</td>
              <td>{{ props.item.reward }}</td>
              <td>{{ props.item.body }}</td>
              <td style="width:12%">{{ props.item.date }}</td>
              <td class="justify-center layout px-0">
                <v-flex mt-2 class="text-xs-center">
                  <v-btn icon to="/messages/1">
                    <v-icon small class="green--text">visibility</v-icon>
                  </v-btn>
                </v-flex>
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
			
			timeSort: 'day',
			statusSort: 'sent',
			search: '',
			headers: [
				{text: 'Status', align: 'left', value: 'status' },
				{text: 'Recipients', value: 'recipients' },
				{text: 'Reward', value: 'reward'},
				{text: 'Message', value: 'message' },
				{text: 'Date', value: 'date' },
				{text: 'Actions', value: 'name', sortable: false }
			],
			messages : [],
			messages_count : 0
		}
	},

	created : async function(){

			try{

				let response = await axios.get('http://localhost:8000/api/messages/all?api_token=2f66686b');
				
				let {status, data} = response.data;
				
				if(status != false){
					
					this.messages = data;
					this.messages_count = data.length;
				}

			}catch(ex){

				console.error(ex);
			}
	}
	
}
</script>

<style lang="scss" scoped>
.multiple-btn {
	width: 100px;
}
</style>
