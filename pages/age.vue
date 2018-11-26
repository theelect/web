<template>
<section>
  <v-container fluid>
    <v-flex mb-5>
      <v-btn class="primary my-btn" to="/dashboard" dark>
        <v-icon large>arrow_left</v-icon>
      </v-btn>
        <div class="headline d-inline ml-2">Age Distribution</div>
    </v-flex>

    <v-card height="440" class="pa-5">
      <div class="pt-4 pb-4">AGE DISTRIBUTION</div>
      <bar-chart :height="100"></bar-chart>
    </v-card>

    <v-card height="500" class="mt-4 pa-5">
      <v-layout row wrap px-4 pt-4>
        <v-flex md8 class="subheading font-weight-bold">Age</v-flex>
        <v-flex md4 class="subheading font-weight-bold">Population</v-flex>
      </v-layout>

      <v-divider class="my-4"></v-divider>

      <v-list dense>
        <v-layout row wrap px-4 py-3 v-for="n in 5" :key="n">
          <v-flex md8 class="">20-30</v-flex>
          <v-flex md4 class="">50,000</v-flex>
        </v-layout>
      </v-list>

      <v-container grid-list-md>
        <v-layout justify-end>
        <v-btn xs12 sm6 flat class="primary--text caption">Prev</v-btn>
        <v-divider vertical></v-divider>
        <v-btn xs12 sm6 flat class="primary--text caption">Next</v-btn>
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
</style>


<script>
import BarChart from '~/components/charts/BarChart'
export default {
  layout: 'dashboard',
  name: 'charts',
  components: {
    BarChart
  }
}
</script>