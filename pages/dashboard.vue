<template>
<section>

<!-- Map Script -->
<script src="map/mapdata.js"></script>
<script src="map/custommap.js"></script>
<script src="map/update_map.js"></script>
<!-- End Map Script -->



  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12 md2>
        <v-img :src="`/tonye.jpg`" max-height="240">

          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-layout>

        </v-img>
      </v-flex>

      <v-flex xs12 md5>
        <v-layout column wrap>
          <v-flex>
            <v-card max-height="116" class="primary white--text px-4 pb-3 pt-2">
              <div class="text-xs-right primary--text">More</div>

              <div class="body-2">Total Verified Voters</div>
              <div class="display-2 mt-2">{{ verifiedVotersPercentage }}</div>
            </v-card>
          </v-flex>

          <v-flex>
            <v-card max-height="116" class="px-4 py-4">
              <div class="body-2">Scheduled Messages</div>
              
              <div v-if="show">
                <v-progress-circular :indeterminate="true" color="primary"></v-progress-circular>
              </div>
              
              <div v-if="!show" class="mt-2">
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
              
              <div v-if="show">
                <v-progress-circular color="primary" :indeterminate="true"></v-progress-circular>
              </div>

              <div v-if="!show" class="mt-2">
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
        <v-card class="pa-4" max-height="480">

          <v-layout row wrap>
            <v-flex xs6>
              <div id="simplemaps_legend"></div> 
            </v-flex>

            <v-flex xs6>
              <nuxt-link to="/enlarged-map">
                <div class="primary--text text-xs-right">Expand</div>
              </nuxt-link>
            </v-flex>

          </v-layout>

          <div class="pa-3">
            

            <v-layout row wrap align-center justify-center fill-height>
              <v-flex>
                <div id="loadingDiv" class="subheading">
                  Loading...
                </div>
              </v-flex>
            </v-layout>

            <div id="map"></div>

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
            <v-layout row wrap px-4 py-2 v-for="(lga, index) in sortedLgas" :key="index">
              <v-flex md8 class>{{ lga._id | capitalize }}</v-flex>
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

    <v-layout row wrap mt-4>
      <v-flex xs12 md6>
        <v-card height="480">
          <nuxt-link to="/wards">
            <div class="primary--text pr-4 pt-4 text-xs-right">Expand</div>
          </nuxt-link>

          <div class="pl-4 pt-4">TOP 5 WARDS</div>

          <v-layout row wrap px-4 pt-4>
            <v-flex md8 class="subheading font-weight-bold">Wards</v-flex>
            <v-flex md4 class="subheading font-weight-bold">Total Verified</v-flex>
          </v-layout>

          <v-divider></v-divider>

          <v-list dense>
            <v-layout row wrap px-4 py-2 v-for="(ward, index) in sortedWards" :key="index">
              <v-flex md8 class>{{ ward._id | capitalize }}</v-flex>
              <v-flex md4 class>{{ ward.count }}</v-flex>
            </v-layout>
          </v-list>
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
      show : true
    }
  },
  async asyncData({app}) {
    let lgas = await app.$axios.$get('/pvc/statistics?type=lga', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    let wards = await app.$axios.$get('/pvc/statistics?type=ward', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    let pvc = await app.$axios.$get('/pvc', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    let pvcCount = await app.$axios.$get('/pvc-count', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    return {lgas, pvc, pvcCount, wards}
  },
  beforeCreate() {
    this.$store.dispatch('pvcCount')
    
  },
  created : async function(){
    try{

      this.show = true

      let payload = { headers : {'Content-Type' : 'application/json', 'Authorization' : 'Bearer 2f66686b'} }
        let response = await axios.get('https://theelect-smsapi.herokuapp.com/index.php/api/messages/count/analysis', payload);

        let {status, data} = response.data;

      if(status != false){
        this.scheduled_messages_count = data.scheduled;
        this.sent_messages_count = data.sent;
      }

      this.show = false

    }catch(ex){}
  },
  components: {
    BarChart,
    DoughnutChart
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    verifiedVotersPercentage() {
      let percentage = (this.pvcCount.total_verified/this.pvc.total)*100
      return percentage.toFixed(2) + '%'
    },
    sortedLgas() {
      let sortedLgas = this.lgas.sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0))
      return sortedLgas.slice(0,5)
    },
    sortedWards() {
      let sortedWards = this.wards.sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0))
      return sortedWards.slice(0,5)
    }
  }
};
</script>
