<template>
  <v-app light>
    <v-content>
      <v-layout justify-end>
        <v-btn dark fab class="red" to="/dashboard">
        <v-icon large>close</v-icon>
      </v-btn>
      </v-layout>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
