<template>
<section>
  <v-container fluid>
    <v-flex mb-5>
      <v-btn class="primary my-btn" to="/dashboard" dark>
        <v-icon large>arrow_left</v-icon>
      </v-btn>
        <div class="headline d-inline ml-2">Profession</div>
    </v-flex>

    <v-card height="440" class="px-5 py-4">
      <div class="pt-4 pb-4">PROFESSION</div>
      <doughnut-chart :height="300"></doughnut-chart>
    </v-card>

    <v-card class="mt-4 pa-5">
      <v-layout row wrap px-4 pt-4>
        <v-flex md8 class="subheading font-weight-bold">Profession</v-flex>
        <v-flex md4 class="subheading font-weight-bold">Population</v-flex>
      </v-layout>

      <v-divider class="my-4"></v-divider>

      <v-list dense>
        <v-layout row wrap px-4 py-3 v-for="(occupation, index) in occupations" :key="index">
          <v-flex md8 class="">{{ occupation._id | capitalize }}</v-flex>
          <v-flex md4 class="">{{ occupation.count }}</v-flex>
        </v-layout>
      </v-list>
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
import DoughnutChart from '~/components/charts/DoughnutChart'
export default {
  layout: 'dashboard',
  name: 'charts',
  components: {
    DoughnutChart
  },
  computed: {
    occupations() {
      return this.$store.getters.occupation
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>