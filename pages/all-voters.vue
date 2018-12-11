<template>
<section>
  <v-container fluid>
    <v-layout row wrap justify-space-between mb-5>

      <v-flex>
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

      <v-spacer class="mr-4"></v-spacer>

      <v-flex offset-md5>
        <v-btn-toggle v-model="lgaProfession" class="mb-4">
          <v-btn flat @change="lgaPopup=true" class="caption toggleBtn" value="lga">LGA</v-btn>
          <v-btn flat class="caption toggleBtn" value="ward">Ward</v-btn>
          <v-btn flat class="caption toggleBtn" value="profession">Profession</v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>

    <v-dialog v-model="lgaPopup" max-width="500">
      <v-card class="pa-5">

        <div class="caption text-xs-left mb-2 blue-grey--text">FILTER BY LOCAL GOVERNMENT AREAS</div>
        <v-autocomplete :disabled="isUpdating" v-model="lgaSelected" :items="lgas" solo-inverted chips color="blue-grey lighten-2" label="Select" item-text="name" item-value="name" multiple>
          <template slot="selection" slot-scope="data">
            <v-chip :selected="data.selected" close class="chip--select-multi" @input="remove(data.item)">
              {{ data.item.name }}
            </v-chip>
          </template>
          <template slot="item" slot-scope="data">
            <template>
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
              </v-list-tile-content>
            </template>
          </template>
        </v-autocomplete>

        <v-btn dark class="primary" v-if="verified" @click="lgaSubmitVerified">Submit</v-btn>
        <v-btn dark class="primary" v-else @click="lgaSubmit">Submit</v-btn>
      </v-card>
    </v-dialog>

    <v-layout row class="pt-2 mb-5">
      <v-btn-toggle v-model="cardTable">
        <v-btn @change="cardSwitch=true" class="caption toggleBtn" flat value="cards">
          <v-icon class="mr-2">view_module</v-icon>Cards
        </v-btn>
        <v-btn @change="cardSwitch=false" class="caption toggleBtn" flat value="table">
          <v-icon class="mr-2">view_column</v-icon>Table
        </v-btn>
      </v-btn-toggle>

      <v-spacer></v-spacer>

      <v-btn-toggle v-model="allVoters">
        <v-btn @change="general" class="caption toggleBtn" flat value="all">
          All Voters
        </v-btn>
        <v-btn @change="verifiedVoters" class="caption toggleBtn" flat value="verified">
          Verified Voters
        </v-btn>
      </v-btn-toggle>
    </v-layout>

    <v-layout v-if="cardSwitch" row wrap>
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

    <v-data-table hide-actions :pagination.sync="pagination" v-if="!cardSwitch" :headers="headers" :items="voters">
      <v-progress-linear slot="no-data" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <tr>
          <td>{{ props.item.first_name | capitalize }} {{ props.item.last_name | capitalize }}</td>
          <td>{{ props.item.phone}}</td>
          <td>{{ props.item.dob | formatDate}}</td>
          <td>{{ props.item.profession | capitalize}}</td>
          <td>{{ props.item.lga | capitalize}}</td>
          <td>{{ props.item.ward | capitalize}}</td>
          <td v-if="props.item.is_verified ? status='Verified' : status='Unverified'">{{ status }}</td>
        </tr>
      </template>
    </v-data-table>

    <div class="text-xs-center mt-5">
      <v-pagination v-model="pageVerified" v-if="verified" :total-visible="8" circle :length="pLenghtVerified" @input="pageChangeVerified"></v-pagination>
      <v-pagination v-model="page" v-else :total-visible="8" circle :length="pLenght" @input="pageChange"></v-pagination>
    </div>

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

.toggleBtn {
  width: 135px;
}
</style>

<script>
import moment from 'moment'
import * as URLS from "@/utils/urls";
export default {
  layout: 'dashboard',
  data() {
    return {
      allVoters: 'all',
      lgaProfession: 'lga',
      lgaPopup: false,
      cardSwitch: true,
      cardTable: 'cards',
      page: 1,
      verified: false,
      pageVerified: 1,
      lgaSelected: [],
      isUpdating: false,
      name: 'Midnight Crew',
      people: [{
          header: 'Group 1'
        },
        {
          name: 'Sandra Adams',
          group: 'Group 1'
        },
        {
          name: 'Ali Connors',
          group: 'Group 1'
        },
        {
          name: 'Trevor Hansen',
          group: 'Group 1'
        },
        {
          name: 'Tucker Smith',
          group: 'Group 1'
        },
        {
          divider: true
        },
        {
          header: 'Group 2'
        },
        {
          name: 'Britta Holt',
          group: 'Group 2'
        },
        {
          name: 'Jane Smith ',
          group: 'Group 2'
        },
        {
          name: 'John Smith',
          group: 'Group 2'
        },
        {
          name: 'Sandra Williams',
          group: 'Group 2'
        }
      ],
      pagination: {
        rowsPerPage: 10,
      },
      headers: [{
          text: "Name",
          align: "left",
          value: "name"
        },
        {
          text: "Phone Number",
          value: "phone"
        },
        {
          text: "DOB",
          value: "dob"
        },
        {
          text: "Profession",
          value: "profession"
        },
        {
          text: "LGA",
          value: "lga"
        },
        {
          text: "Ward",
          value: "ward"
        },
        {
          text: "Status",
          value: "status"
        }
      ],
    }
  },
  methods: {
    async pageChange() {
      this.pvc = await this.$axios.$get(`/pvc?page=${this.page}&perPage=18&lga=${this.lgaSelected}`, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      })
    },
    async pageChangeVerified() {
      this.pvc = await this.$axios.$get(`/pvc?page=${this.pageVerified}&perPage=18&is_verified=true&lga=${this.lgaSelected}`, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      })
    },
    async verifiedVoters() {
      this.pvc = await this.$axios.$get(`/pvc?page=1&perPage=18&is_verified=true&lga=${this.lgaSelected}`, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      })
      this.verified = true
    },
    async general() {
      this.pvc = await this.$axios.$get(`/pvc?page=1&perPage=18&lga=${this.lgaSelected}`, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      })
      this.verified = false
    },
    remove(item) {
      const index = this.lgaSelected.indexOf(item.name)
      if (index >= 0) this.lgaSelected.splice(index, 1)
    },
    async lgaSubmit() {
      this.pvc = await this.$axios.$get(`/pvc?page=1&perPage=18&lga=${this.lgaSelected}`, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      })
      this.lgaPopup = false
    },
    async lgaSubmitVerified() {
      this.pvc = await this.$axios.$get(`/pvc?page=1&perPage=18&is_verified=true&lga=${this.lgaSelected}`, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      })
      this.lgaPopup = false
    }
  },

  async asyncData({
    app
  }) {
    let pvc = await app.$axios.$get('/pvc?page=1&perPage=18', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    let lgas = await app.$axios.$get('/lgas', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    let pvcCount = await app.$axios.$get(URLS.pvcCount, {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    })
    return {
      pvc,
      lgas,
      pvcCount
    }
  },
  computed: {
    voters() {
      const voters = this.pvc.docs
      return voters
    },
    pLenght() {
      const pLenght = Math.round((this.pvc.total) / 18)
      return pLenght
    },
    pLenghtVerified() {
      const pLenghtVerified = Math.round((this.pvc.total_verified) / 18)
      return pLenghtVerified
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
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    }
  },
}
</script>
