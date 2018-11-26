<template>
<section>
  <v-container fluid>
    <v-flex mb-5>
      <v-btn class="primary my-btn" to="/dashboard" dark>
        <v-icon large>arrow_left</v-icon>
      </v-btn>
      <div class="d-inline">
        <div class="title d-inline ml-2">All Voters</div>
        <div class="title d-inline grey--text ml-3">3,000,000</div>
      </div>
      <div class="mt-2">
        <div class="title d-inline ml-2">Verified Voters</div>
        <div class="title d-inline green--text ml-3">2,895,152</div>
      </div>
    </v-flex>

    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 xl3 v-for="n in 9" :key="n" mb-4>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto pt-4" width="290">
            <v-layout class="justify-end">
              <v-badge v-if="isOnline" class="mr-3" left color="green">
                <span slot="badge"></span>
              </v-badge>
              <v-badge v-else class="mr-3" left color="grey">
                <span slot="badge"></span>
              </v-badge>
            </v-layout>
            <v-card-title class="d-block px-4">
              <div class="title">Sam Ogunjumbi</div>
              <div class="primary--text mt-2">080 125 8956</div>
              <div class="grey--text mt-2">Nov 10, 1990 / Trader</div>
            </v-card-title>
            <div class="smallest primary--text text-xs-right mr-4 mb-1 mt-2">Verified By: Sam Dunno</div>
            <v-card-text class="blue-grey lighten-4 px-4">
              Lagos State - Victoria Island
            </v-card-text>
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
export default {
  layout: 'dashboard',
  data: () => ({
    isOnline: true
  })
}
</script>
