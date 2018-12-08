<template>
  <v-app light>
    <v-content class="primary">
      <v-container>
        <transition name="fade">
          <nuxt />
        </transition>
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
