<template>
<v-app id="dashboard">
  
  <!-- Map Script -->
  <script src="map/mapdata.js"></script>
  <script src="map/custommap.js"></script>
  <script src="map/update_map.js"></script>
  <!-- End Map Script -->
  


  <v-navigation-drawer class="primary" width="200" dark :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
    <v-list>
      <template>
        <v-list-tile class="mt-4 mb-2" to="/dashboard">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>DASHBOARD</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-list-tile class="mb-2" to="/contacts">
          <v-list-tile-action>
            <v-icon>contacts</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>CONTACTS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

        <v-list-tile class="mb-2" to="/all-voters">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>VOTERS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-list-tile class="mb-2" to="#">
          <v-list-tile-action>
            <v-icon>how_to_vote</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>POLLING</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

        <v-list-tile class="mb-2" to="/messages">
          <v-list-tile-action>
            <v-icon>mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>MESSAGES</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider class="grey"></v-divider>

        <v-list-tile class="mt-2" to="/settings">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>SETTINGS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>

    <v-footer class="justify-center transparent" fixed>
      <small class="pa-2">Powered By The-Elect</small>

    </v-footer>
  </v-navigation-drawer>

  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="white" light app fixed>
    <v-toolbar-title class="ml-0">
      <nuxt-link style="width: 185px" class="" to="/dashboard"><span>
          <img class="logo hidden-md-and-down" src="/logo2.png" align="middle" alt="logo">
        </span></nuxt-link>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div class="text-xs-center">
      <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-avatar size="35">
            <v-img :src="`/tonye.jpg`"></v-img>
          </v-avatar>
        </v-btn>
        <v-card class="pa-3">
          <v-btn to="/profile" flat small color="primary">Profile</v-btn>

          <v-divider class="my-2"></v-divider>

          <v-btn @click="logout" flat small color="primary">Log Out</v-btn>
        </v-card>
      </v-menu>
    </div>
  </v-toolbar>

  <v-content>
    <transition name="fade">
      <nuxt class="my-container"></nuxt>
    </transition>
  </v-content>

</v-app>
</template>

<style lang="scss" scoped>
.v-btn {
  text-transform: unset;
}
</style>


<script>
require('static/map/jquery.min.js')

export default {
  middleware: 'authenticated',
  data: () => ({
    drawer: null
  }),
  methods: {
    logout() {
      this.$toast.show('Logging out...', {icon: "fingerprint"});
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
};
</script>
