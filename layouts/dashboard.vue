<template>
<v-app id="dashboard">
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

        <v-list-tile class="mb-2" to="#">
          <v-list-tile-action>
            <v-icon>contacts</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>CONTACTS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mb-2" to="/all-voters">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>VOTERS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mb-2" to="/realtime-voters">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>REAL TIME VOTERS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mb-2" to="#">
          <v-list-tile-action>
            <v-icon>how_to_vote</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>POLLING</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mb-2" to="#">
          <v-list-tile-action>
            <v-icon>mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>MESSAGES</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider class="grey"></v-divider>

        <v-list-tile class="mt-2" to="#">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>SETTINGS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="white" light app fixed>
    <v-toolbar-title class="ml-0">
      <nuxt-link style="width: 185px" class="" to="/dashboard"><span>
          <img class="logo hidden-md-and-down" src="/logo2.png" align="middle" alt="logo">
        </span></nuxt-link>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon large>account_circle</v-icon>
    </v-btn>
  </v-toolbar>

  <v-content>
    <v-container fluid fill-height>
      <nuxt></nuxt>
    </v-container>
  </v-content>

</v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  })
};
</script>
