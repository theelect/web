<template>
<v-container fluid>
  <v-flex mb-5>
    <v-btn class="primary my-btn" to="/messages" dark>
      <v-icon large>arrow_left</v-icon>
    </v-btn>
    <div class="d-inline">
      <div class="title d-inline ml-2">New Message</div>
    </div>
  </v-flex>

  <v-card class="pa-5">
    <div class="mb-5">
      <div class="caption blue-grey--text">RECIPIENTS</div>
    </div>

    <div class="caption blue-grey--text mt-2">MESSAGE BODY</div>
    <v-textarea class="mb-4" auto-grow box color="primary" rows="8" counter>
      <div class="caption" slot="label">Message</div>
    </v-textarea>

    <v-btn xs12 sm6 class="primary caption ">SEND MESSAGE</v-btn>
    <v-btn to="/messages" xs12 sm6 dark class="red caption">BACK</v-btn>
  </v-card>
</v-container>
</template>

<script>
import moment from "moment";
export default {
  layout: "dashboard",
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>
