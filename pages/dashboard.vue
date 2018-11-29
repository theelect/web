<template>
  <section>
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs12 md2>
          <v-img :src="`/tonye.jpg`" max-height="240"></v-img>
        </v-flex>

        <v-flex xs12 md5>
          <v-layout column wrap>
            <v-flex>
              <v-card max-height="116" class="primary white--text px-4 pb-3 pt-2">
                <!-- <nuxt-link to="/all-voters"> -->
                  <div class="text-xs-right primary--text">More</div>
                <!-- </nuxt-link> -->

                <div class="body-2">Total Verified Voters</div>
                <div class="display-2 mt-2">2,895,684</div>
              </v-card>
            </v-flex>

            <v-flex>
              <v-card max-height="116" class="px-4 py-4">
                <div class="body-2">Scheduled Messages</div>
                <div class="mt-2">
                  <span class="display-2 primary--text d-inline">{{scheduled_messages_count}}</span>
                  <span class="grey--text d-inline ml-5">This Month</span>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 md5>
          <v-layout column wrap>
            <v-flex>
              <v-card max-height="116" class="primary white--text px-4 pb-3 pt-2">
                <nuxt-link to="/all-voters">
                  <div class="text-xs-right white--text">More</div>
                </nuxt-link>
                <div class="body-2">Total Voters</div>
                <div class="display-2 mt-2">{{ pvc.total }}</div>
              </v-card>
            </v-flex>

            <v-flex>
              <v-card max-height="116" class="px-4 py-4">
                <div class="body-2">Sent</div>
                <div class="mt-2">
                  <span class="display-2 primary--text d-inline">{{sent_messages_count}}</span>
                  <span class="grey--text d-inline ml-5">This Month</span>
                </div>
              </v-card>
            </v-flex>
            
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout row wrap mt-4>
        <v-flex xs12 md6>
          <v-card class="pa-4" height="480">
            <nuxt-link to="/test">
              <div class="primary--text text-xs-right">Expand</div>
            </nuxt-link>

            <div class="pa-3">
              <div id="map"></div>
  
              <script src="/mapdata.js"></script>
              <script src="/countrymap.js"></script>
            </div>
          </v-card>
        </v-flex>

        <v-flex xs12 md6>
          <v-card height="480">
            <nuxt-link to="/lgas">
              <div class="primary--text pr-4 pt-4 text-xs-right">Expand</div>
            </nuxt-link>

            <div class="pl-4 pt-4">TOP 5 LOCAL GOVERNMENT AREAS</div>

            <v-layout row wrap px-4 pt-4>
              <v-flex md8 class="subheading font-weight-bold">Local Government Area</v-flex>
              <v-flex md4 class="subheading font-weight-bold">Total Verified</v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-list dense>
              <v-layout row wrap px-4 py-2 v-for="(lga, index) in lgas.slice(0, 5)" :key="index">
                <v-flex md8 class>{{ lga._id }}</v-flex>
                <v-flex md4 class>{{ lga.count }}</v-flex>
              </v-layout>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap mt-4>
        <v-flex md6 xs12>
          <v-card height="440" class="pa-3">
            <nuxt-link to="/age">
              <div class="primary--text text-xs-right">Expand</div>
            </nuxt-link>

            <div class="pt-4 pb-4">AGE DISTRIBUTION</div>
            <bar-chart :height="250"></bar-chart>
          </v-card>
        </v-flex>
        <v-flex md6 xs12 class>
          <v-card height="440" class="pa-3">
            <nuxt-link to="/profession">
              <div class="primary--text text-xs-right">Expand</div>
            </nuxt-link>

            <div class="pt-4 pb-4">TOP PROFESSIONS</div>
            <doughnut-chart :height="300"></doughnut-chart>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import BarChart from "~/components/charts/BarChart";
import DoughnutChart from "~/components/charts/DoughnutChart";
import axios from 'axios';

export default {
  middleware: "authenticated",
  layout: "dashboard",
  name: "charts",
  	data() {
		
		return {
      scheduled_messages_count : 0,
      sent_messages_count : 0,
		}
	},
	created : async function(){
			try{
				let payload = { headers : {'Content-Type' : 'application/json', 'Authorization' : 'Bearer 2f66686be77a3eff684cead289fabe873c8032dfaf8a3fc8c13b4a6dd26c2b89'} }
        let response = await axios.get('https://theelect-smsapi.herokuapp.com/index.php/api/messages/count/analysis', payload);
				
        let {status, data} = response.data;

				if(status != false){
          this.scheduled_messages_count = data.scheduled;
          this.sent_messages_count = data.sent;
        }

			}catch(ex){
				console.error(ex);
			}
	},
  components: {
    BarChart,
    DoughnutChart
  },
  computed: {
    pvc() {
      return this.$store.getters.pvc
    },
    lgas() {
      return this.$store.getters.lga
    }
  }
};
</script>
