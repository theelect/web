<template>
<section>
  <v-container fluid>
    <v-flex mb-5>
      <v-btn class="primary my-btn" to="/dashboard" dark>
        <v-icon large>arrow_left</v-icon>
      </v-btn>
      <div class="d-inline">
        <div class="title d-inline ml-2">All Voters</div>
        <div class="title d-inline grey--text ml-3">{{ pvc.total }}</div>
      </div>
      <div class="mt-2">
        <div class="title d-inline ml-2">Verified Voters</div>
        <div class="title d-inline green--text ml-3">{{ pvcCount.total_verified }}</div>
      </div>
    </v-flex>

    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 xl3 v-for="(voter, index) in voters" :key="index" mb-4>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto pt-4" width="320" height="210">
            <v-layout class="justify-end">
              <v-badge v-if="voter.is_verified" class="mr-3" left color="green">
                <span slot="badge"></span>
              </v-badge>
              <v-badge v-else class="mr-3" left color="grey">
                <span slot="badge"></span>
              </v-badge>
            </v-layout>
            <v-card-title class="d-block px-4">
              <v-layout mb-3 row wrap align-center align-content-center>
                <v-flex md2>
                  <v-icon class="black--text">
                    account_circle
                  </v-icon>
                </v-flex>
                <v-flex md10>

                  <div class="title">{{ voter.first_name | capitalize }} {{ voter.last_name | capitalize }}</div>
                </v-flex>
              </v-layout>
              <div class="primary--text">{{ voter.phone }}</div>
              <div v-if="voter.dob!=null || voter.profession!=null" class="grey--text mt-2"> {{ voter.dob | formatDate }} <span v-if="voter.dob!=null && voter.profession!=null">/</span> {{ voter.profession | capitalize }}</div>
              <div v-else class="grey--text mt-2">Unknown DOB and Profession</div>
            </v-card-title>

            <v-card-text v-if="voter.lga!=null || voter.ward!=null" class="blue-grey lighten-4 px-4 mt-4">
              {{ voter.lga | capitalize }} <span v-if="voter.lga!=null && voter.ward!=null">-</span> {{ voter.ward | capitalize }}
            </v-card-text>
            <v-card-text v-else class="blue-grey lighten-4 px-4 mt-4">Unknown LGA and Ward</v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
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
import moment from 'moment'
import * as URLS from "@/utils/urls";
export default {
  layout: 'dashboard',
  async asyncData({app}) {
    let pvc = await app.$axios.$get(URLS.pvc, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    let pvcCount = await app.$axios.$get(URLS.pvcCount, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    return {pvc, pvcCount}
  },
  computed: {
    voters() {
      const voters = this.pvc.docs
      return voters
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
      return date ? moment(date).format('YYYY') : ''
    }
  }
}
</script>
