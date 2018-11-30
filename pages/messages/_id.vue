<template>
  <section>
    <v-container fluid>
      <v-flex mb-5>
        <v-btn class="primary my-btn" to="/messages" dark>
          <v-icon large>arrow_left</v-icon>
        </v-btn>
        <div class="d-inline">
          <div class="title d-inline ml-2">Message Detail</div>
        </div>
      </v-flex>

      <v-card class="pa-4">
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">RECIPIENTS</div>
              <div class="font-weight-bold title">{{recipients}}</div>
            </v-flex>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">SCHEDULED DATE</div>
              <div class="font-weight-bold title">{{date}}</div>
            </v-flex>
          </v-layout>

          <v-layout row wrap mt-5>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">SENDER'S NAME</div>
              <div class="font-weight-bold title">{{sender}}</div>
            </v-flex>
            <v-flex xs12 md6>
              <div class="caption blue-grey--text mb-2">STATUS</div>
              <div class="font-weight-bold title">{{status}}</div>
            </v-flex>
          </v-layout>

          <v-flex mt-5>
            <div class="caption blue-grey--text mb-2">MESSAGE</div>
            <div class>{{message}}</div>
          </v-flex>

          <v-layout row wrap justify-end mt-5>
            <v-btn xs12 sm6 class="primary caption" to="/messages">BACK</v-btn>
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
  width: 40px;
}
</style>

<script>
let sms_url = "http://localhost:8000/api";
import axios from "axios";

export default {
  layout: 'dashboard',
  data() {
		
		return {
			
      recipients : '',
      date : '',
      sender : '',
      status : '',
      message: ''
		}
	},

  created : async function(){

			try{

        let id = this.$route.params.id;
        
        let response = await axios.get(`${sms_url}/message/${id}?api_token=2f66686b`);

        console.log(response);

				let {status, data} = response.data;
				
				if(status != false){
					
          this.recipients = data.recipients;
          this.date = data.date;
          this.sender = data.sender;
          this.status = data.status;
          this.message = data.body;
          
				}

			}catch(ex){

				console.error(ex);
			}
	}
}
</script>
