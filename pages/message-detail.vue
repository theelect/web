<template>
<section>
  <v-container fluid>
    <v-flex mb-5>
      <v-btn class="primary my-btn" to="/messages" dark>
        <v-icon large>arrow_left</v-icon>
      </v-btn>
      <div class="d-inline">
        <div class="title d-inline ml-2">Message Detail</div>
      </div>
    </v-flex>

    <v-card class="pa-4">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <div class="caption blue-grey--text mb-2">RECIPIENTS</div>
            <div class="font-weight-bold title">500,000</div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="caption blue-grey--text mb-2">SCHEDULED DATE</div>
            <div class="font-weight-bold title">13 November, 2018</div>
          </v-flex>
        </v-layout>

        <v-layout row wrap mt-5>
          <v-flex xs12 md6>
            <div class="caption blue-grey--text mb-2">SENDER'S NAME</div>
            <div class="font-weight-bold title">Tonye Cole</div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="caption blue-grey--text mb-2">CONTACT NAME</div>
            <div class="font-weight-bold title">Edo Williams</div>
          </v-flex>
        </v-layout>

        <v-flex mt-5>
          <div class="caption blue-grey--text mb-2">MESSAGE</div>
          <div class="">Hi Edo Williams. My name is Tonye Cole. Could you go out and vote. Press 1 for N200 reward.</div>
        </v-flex>

        <v-layout row wrap justify-end mt-5>
          <v-btn xs12 sm6 class="primary caption">EDIT MESSAGE</v-btn>
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

.my-btn {
  width: 40px;
}
</style>

<script>
export default {
  layout: 'dashboard'
}
</script>
