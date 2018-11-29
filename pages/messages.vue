
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

      <v-card>
        <v-card-title></v-card-title>
        <v-data-table :headers="headers" :items="messages" :search="search">
          <template slot="no-data" class="text-xs-center">Loading...</template>
          <template slot="items" slot-scope="props">
            <tr>
              <td>{{ props.item.status }}</td>
              <td>{{ props.item.recipients }}</td>
              <td>{{ props.item.reward }}</td>
              <td>{{ props.item.body }}</td>
              <td style="width:12%">{{ props.item.date }}</td>
            </tr>
          </template>
          <v-alert
            slot="no-results"
            :value="true"
            color="error"
            icon="warning"
          >Your search for "{{ search }}" found no results.</v-alert>
        </v-data-table>
      </v-card>

  <v-expansion-panel>
      <v-expansion-panel-content
        v-for="(x, i) in messagesMonth"
        :key="i"
      >
        <div slot="header">{{x}}</div>
        <v-card>
          <v-data-table :headers="headers" :items="messages" :search="search">
            <template slot="no-data" class="text-xs-center">Loading...</template>
            <template slot="items" slot-scope="props">
              <tr>
                <td>{{ props.item.status }}</td>
                <td>{{ props.item.recipients }}</td>
                <td>{{ props.item.reward }}</td>
                <td>{{ props.item.body }}</td>
                <td style="width:12%">{{ props.item.date }}</td>
              </tr>
            </template>
            <v-alert
              slot="no-results"
              :value="true"
              color="error"
              icon="warning"
            >Your search for "{{ search }}" found no results.</v-alert>
          </v-data-table>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

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
			statusSort: 'all',
			search: '',
			headers: [
				{text: 'Status', align: 'left', value: 'status' },
				{text: 'Recipients', value: 'recipients' },
				{text: 'Reward', value: 'reward'},
				{text: 'Message', value: 'message' },
				{text: 'Date', value: 'date' }
			],
      messages : [],
      messages_count : 0
		}
	},
	created : async function(){
			try{
				let payload = { headers : {'Content-Type' : 'application/json', 'Authorization' : 'Bearer 2f66686be77a3eff684cead289fabe873c8032dfaf8a3fc8c13b4a6dd26c2b89'} }
        let response = await axios.get('https://theelect-smsapi.herokuapp.com/index.php/api/messages/all', payload);
				
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