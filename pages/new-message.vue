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

  <v-tabs height="60" grow color="primary" dark slider-color="yellow">
    <v-tab ripple href="#all">
      ALL CONTACTS
    </v-tab>
    <v-tab ripple href="#cus">
      CUSTOMIZED RECIPIENTS
    </v-tab>
    <v-tab ripple href="#ent">
      ENTER RECIPIENTS
    </v-tab>

    <v-tab-item value="all">
      <v-card flat class="pa-4">
        <allContacts></allContacts>
      </v-card>
    </v-tab-item>

    <v-tab-item value="cus">
      <v-card flat class="pa-4">
        <customizedRecipients></customizedRecipients>
      </v-card>
    </v-tab-item>

    <v-tab-item value="ent">
      <v-card flat class="pa-4">
        <enterRecipients></enterRecipients>
      </v-card>
    </v-tab-item>
  </v-tabs>
</v-container>
</template>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>

<script>
import allContacts from "~/components/messages/all-contacts"
import enterRecipients from "~/components/messages/enter-recipients"
import customizedRecipients from "~/components/messages/customized-recipients"
export default {
  layout: 'dashboard',
  data() {
    return {

    }
  },
  components: {
    allContacts,
    enterRecipients,
    customizedRecipients
  }
}
</script>
