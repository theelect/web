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
              <div>{{ user.email }}</div>
            </v-flex>
            <nuxt-link to="#">
              <v-flex class="text-xs-right">
                Change email
              </v-flex>
            </nuxt-link>
          </v-layout>

          <v-layout>
            <v-flex>
              <div class="grey--text">Name: <span>{{ user.first_name + ' ' + user.last_name}}</span></div>
            </v-flex>
            <nuxt-link to="#">
              <v-flex class="text-xs-right primary--text">
                Change Name
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
              <div class="grey--text">Phone: <span>{{ user.phone }}</span></div>
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
  layout: "dashboard",

  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  mounted() {
    
  },
}
</script>
