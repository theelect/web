<template>
<section>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md2>
        <v-img :src="`/tonye.png`" max-height="240"></v-img>
      </v-flex>

      <v-flex xs12 md5>
        <v-layout column wrap>
          <v-flex>
            <v-card max-height="116" class="px-5 py-4">
              <div class="body-2">Sent</div>
              <v-layout row mt-4>
                <v-flex xs6 sm3 class="title primary--text">6</v-flex>
                <v-flex class="grey--text">This Month</v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card max-height="116" class="px-5 py-4">
              <v-layout>
                <v-flex class="body-2">Total Verified Voters</v-flex>
                <v-flex class="body-2 primary--text layout justify-end">More</v-flex>
              </v-layout>
              <div class="display-2 primary--text mt-2">2,895,684</div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 md5>
        <v-layout column wrap>
          <v-flex>
            <v-card max-height="116" class="px-5 py-4">
              <div class="body-2">Scheduled Messages</div>
              <v-layout row mt-4>
                <v-flex xs6 sm3 class="title primary--text">100</v-flex>
                <v-flex class="grey--text">This Month</v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card max-height="116" class="px-5 py-4">
              <v-layout>
                <v-flex class="body-2">Total Voters</v-flex>
                <v-flex class="body-2 primary--text layout justify-end">More</v-flex>
              </v-layout>
              <div class="display-2 primary--text mt-2">3,000,000</div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row wrap mt-4>
      <v-flex xs12 md6>
        <v-card class="pa-4" height="400">
          <v-layout justify-end>
            <div class="body-2 primary--text">Expand</div>
          </v-layout>
          <v-responsive class="pa-3">
            <v-img height="300" contain :src="`/map-placeholder.png`"></v-img>
          </v-responsive>
        </v-card>
      </v-flex>

      <v-flex xs12 md6>
        <v-card height="400">
          <v-layout justify-end>
            <div class="body-2 primary--text pr-4 pt-4">Expand</div>
          </v-layout>

          <div class="pl-4 pt-4">TOP 5 LOCAL GOVERNMENT AREAS</div>

          <v-layout row wrap px-4 pt-4>
            <v-flex md8 class="subheading font-weight-bold">Local Government Area</v-flex>
            <v-flex md4 class="subheading font-weight-bold">Total Verified</v-flex>
          </v-layout>

          <v-divider></v-divider>

          <v-list dense>
            <v-layout row wrap px-4 py-2 v-for="n in 5" :key="n">
              <v-flex md8 class="">Port Harcourt</v-flex>
              <v-flex md4 class="">50,000</v-flex>
            </v-layout>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
export default {
  layout: 'dashboard'
}
</script>
