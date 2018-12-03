<template>
<section>
  <v-container grid-list-md>
    <div class="headline mb-5 ">Profile</div>

    <v-card class="pa-5">
      <v-layout row wrap>
        <v-flex xs12 md3>
          <v-img :src="`/tonye.jpg`" max-height="260"></v-img>
        </v-flex>

        <v-flex md6></v-flex>
        <v-flex xs12 md3 mt-5>
            <v-flex my-2>
              <div class="title">{{ user.email }}</div>
            </v-flex>

            <v-flex my-2>
              <div class="grey--text title">Name: <span>{{ user.first_name + ' ' + user.last_name}}</span></div>
            </v-flex>

            <v-flex my-2>
              <div class="grey--text title">Password: <span>********</span></div>
            </v-flex>

            <v-flex mt-2>
              <div class="grey--text title">Phone: <span>{{ user.phone }}</span></div>
            </v-flex>
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
