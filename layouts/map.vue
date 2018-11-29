<template>
<v-app light>
  <v-content class="constraint" style="position: relative">
      <a href="/dashboard" class="my-float">
        <v-icon large dark style="margin-top:13px">close</v-icon>
      </a>
    <nuxt />
  </v-content>
</v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
