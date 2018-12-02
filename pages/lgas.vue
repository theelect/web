<template>
<section>
  <v-container fluid>
    <v-flex mb-5>
      <v-btn class="primary my-btn" to="/dashboard" dark>
        <v-icon large>arrow_left</v-icon>
      </v-btn>
        <div class="headline d-inline ml-2">Local Government Area</div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="headline primary--text">{{ reach.lga }}</span>
    </v-flex>

    <v-card class="mt-4 pa-5">
      <v-layout row wrap px-4 pt-4>
        <v-flex md8 class="subheading font-weight-bold">Local Government Areas</v-flex>
        <v-flex md4 class="subheading font-weight-bold">Total Verified</v-flex>
      </v-layout>

      <v-divider class="my-4"></v-divider>

      <v-list dense>
        <v-layout row wrap px-4 py-3 v-for="(lga, index) in lgas" :key="index">
          <v-flex md8 class="">{{ lga._id | capitalize }}</v-flex>
          <v-flex md4 class="">{{ lga.count }}</v-flex>
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
export default {
  layout: 'dashboard',
  computed: {
    lgas() {
      return this.$store.getters.lga
    },
    reach() {
      return this.$store.getters.reach
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