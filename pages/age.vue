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
        <v-layout row wrap px-4 py-3 v-for="(age, index) in age" :key="index">
          <v-flex md8 class="">{{ age[0] }}</v-flex>
          <v-flex md4 class="">{{ age[1] }}</v-flex>
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
import BarChart from '~/components/charts/BarChart'
export default {
  layout: 'dashboard',
  name: 'charts',
  computed: {
    age() {
      // return this.$store.getters.age
      var storedAge = this.$store.getters.age
      var age = Object.keys(storedAge).map(function (key) {
        return [(key), storedAge[key]];
      });

      return age
    }
  },
  components: {
    BarChart
  }
}
</script>
