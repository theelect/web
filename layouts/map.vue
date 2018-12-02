<template>
<v-app light>
  <v-content class="constraint" style="position: relative">
    <nuxt-link to="/dashboard" class="my-float">
      <v-icon large dark style="margin-top:13px">close</v-icon>
    </nuxt-link>
    <nuxt />
  </v-content>
</v-app>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {}
  }
}
</script>
