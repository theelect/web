<template>
<section>
  <v-layout mb-5>
    <div class="headline">Contacts</div> &nbsp;&nbsp;&nbsp;&nbsp; <div class="headline primary--text">3</div>
    <v-layout class="justify-end">
      <v-btn to="/new-contact" class="primary caption">
        <v-icon>add</v-icon> NEW CONTACT
      </v-btn>
    </v-layout>
  </v-layout>

  <v-layout row>
    <div class="d-inline">
      <v-btn-toggle v-model="text">
        <v-btn flat value="all" class="multiple-btn">
          ALL
        </v-btn>
        <v-btn flat value="group" class="multiple-btn">
          GROUP
        </v-btn>
      </v-btn-toggle>

      <v-flex mt-3>
        <v-btn large flat class="primary--text blue-grey lighten-5 caption flat-btn">
          <v-icon>add</v-icon> NEW GROUP
        </v-btn>
        <v-btn large flat class="primary--text blue-grey lighten-5 caption flat-btn">
          EDIT
        </v-btn>
      </v-flex>

      <v-card width="253" height="500" flat class="blue-grey lighten-5 mt-1">
        <v-list class="blue-grey lighten-5 blue-grey--text">
          <template>
            <v-list-tile class="mt-4" to="#">
              <v-list-tile-content>
                <v-list-tile-title class="list-content pl-2">Group For Me</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="#">
              <v-list-tile-content>
                <v-list-tile-title class="list-content pl-2">Second Group</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="#">
              <v-list-tile-content>
                <v-list-tile-title class="list-content pl-2">Campaign Now</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="#">
              <v-list-tile-content>
                <v-list-tile-title class="list-content pl-2">Opportunity Status</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="#">
              <v-list-tile-content>
                <v-list-tile-title class="list-content pl-2">Lets Growth</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile to="#">
              <v-list-tile-content>
                <v-list-tile-title class="list-content pl-2">Average Value</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </div>

    <div d-inline>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg6 xl4 v-for="n in 4" :key="n" mb-4>
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
              <v-card-text class="blue-grey lighten-5 px-4">
                Lagos State - Victoria Island
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>
</section>
</template>

<style lang="scss" scoped>
.multiple-btn {
  width: 127px;
}

.flat-btn {
  width: 125px;
}

.list-content {
  font-size: 80%;
}
</style>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      text: 'all',
      isOnline: true
    }
  }
}
</script>
