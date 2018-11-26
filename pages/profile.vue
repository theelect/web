<template>
<section>
  <v-container grid-list-md>
    <div class="headline mb-5 ">Profile</div>

    <v-card class="pa-5">
      <v-layout row wrap>
        <v-flex xs12 md3>
          <v-img :src="`/tonye.jpg`" max-height="260"></v-img>
        </v-flex>

        <v-flex xs12 md9 mt-2>
          <v-layout>
            <v-flex>
              <div>ToneyCole@TC.com</div>
            </v-flex>
            <nuxt-link to="#">
              <v-flex class="text-xs-right">
                Change email
              </v-flex>
            </nuxt-link>
          </v-layout>

          <v-layout>
            <v-flex>
              <div class="grey--text">Password: <span>********</span></div>
            </v-flex>
            <nuxt-link to="#">
              <v-flex class="text-xs-right primary--text">
                Change password
              </v-flex>
            </nuxt-link>
          </v-layout>

          <v-layout>
            <v-flex>
              <div class="grey--text">Phone: <span>080 123 12345</span></div>
            </v-flex>
            <nuxt-link to="#">
              <v-flex class="text-xs-right primary--text">
                Change phone number
              </v-flex>
            </nuxt-link>
          </v-layout>

          <v-divider class="my-5"></v-divider>

          <v-layout justify-center>
            <v-btn large outline class="primary primary--text">UPDATE</v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</section>
</template>

<script>
export default {
  layout: "dashboard"
}
</script>
