<template>
<section>
  <v-container grid-list-md>

    <v-dialog v-model="dialog" max-width="350">
      <v-card class="pa-5 primary text-xs-center">
        <div class="caption text-xs-left mb-2 white--text">FIRST NAME</div>
        <v-text-field solo v-model="user.first_name"></v-text-field>

        <div class="caption text-xs-left mb-2 white--text">LAST NAME</div>
        <v-text-field class="mb-4" solo v-model="user.last_name"></v-text-field>
        <v-btn outline dark class="white" @click="updateProfile">Update</v-btn>
      </v-card>
    </v-dialog>

    <v-sheet width="80%" class="pa-5 mx-auto curved-card my-4" color="grey lighten-3">
      <v-layout justify-center my-5>
        <v-card width="400" class="text-xs-center pa-5 primary white--text curved-card elevation-12">
          <v-avatar size="140">
            <v-img :src="`/tonye.jpg`">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-layout>
            </v-img>
          </v-avatar>

          <div class="headline font-weight-bold mt-4">{{ user.first_name + ' ' + user.last_name}}</div>
          <div class="font-weight-regular mb-4">{{ user.role | capitalize }}</div>
          <v-divider></v-divider>
          <div class="title font-weight-regular mt-4">{{ user.email }}</div>
          <div class="title font-weight-regular mt-3 mb-5">{{ user.phone }}</div>

          <v-btn @click="dialog = true" outline dark class="white">Edit Profile</v-btn>
        </v-card>
      </v-layout>
    </v-sheet>
  </v-container>
</section>
</template>

<style lang="scss" scoped>
.curved-card {
  border-radius: 20px;
}
</style>

<script>
import * as URLS from "@/utils/urls";
export default {
  layout: "dashboard",
  data() {
    return {
      dialog: false,
      id: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  methods: {
    async updateProfile() {
      this.$toast.show('Updating user profile...', {
        icon: "fingerprint"
      });
      const data = {
        last_name: this.user.last_name,
        first_name: this.user.first_name
      }
      const id = {
        id: this.user._id
      }
      await this.$axios.patch(`https://theelect.herokuapp.com/api/v1/user/${this.user._id}`, data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      }).then(response => {
        this.$toast.success('Successfully updated User', {
          icon: "check"
        });
        this.dialog = false;
      }).catch(e => {
        console.log(e);
      })
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
