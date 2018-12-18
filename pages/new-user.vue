<template>
<section>
  <v-container grid-list-md fluid>
    <div class="headline mb-5">Settings - New User</div>

    <v-card class="px-4 pb-4 pt-1">
      <v-layout row>
        <v-flex offset-md11 offset-xs8 offset-sm10>
          <v-switch color="primary" v-model="is_active">
            <div class="caption" slot="label">Enable</div>
          </v-switch>
        </v-flex>
      </v-layout>

      <v-flex class="pa-4">
        <v-layout row wrap>
          <v-flex sm6 xs12>
            <v-text-field solo v-model="first_name">
              <div slot="label" class="caption">FIRST NAME</div>
            </v-text-field>
          </v-flex>

          <v-flex sm6 xs12>
            <v-text-field solo v-model="last_name">
              <div slot="label" class="caption">LAST NAME</div>
            </v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row wrap mt-4>
          <v-flex sm6 xs12>
            <v-text-field :append-icon="e3 ? 'visibility' : 'visibility_off'" @click:append="() => (e3 = !e3)" class="mt-1" :type="e3 ? 'password' : 'text'" name="password" :rules="passwordRules" v-model="password" required solo>
              <div slot="label" class="caption">PASSWORD</div>
            </v-text-field>
          </v-flex>

          <v-flex sm6 xs12>
            <v-text-field :rules="emailRules" type="email" name="email" v-model="email" solo color="primary">
              <div slot="label" class="caption">EMAIL</div>
            </v-text-field>
          </v-flex>
        </v-layout>

        <v-radio-group v-model="role" row class="mt-5">
          <v-radio color="primary" label="Admin" value="admin"></v-radio>
          <v-radio color="primary" label="View" value="view"></v-radio>
        </v-radio-group>

        <v-container grid-list-md>
          <v-layout row wrap justify-end mt-4>
            <v-btn xs12 sm6 class="primary caption" @click="create">SAVE</v-btn>
            <v-btn to="/settings" xs12 sm6 dark class="red caption spaced-btn">CANCEL</v-btn>
          </v-layout>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</section>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      email: '',
      first_name: '',
      last_name: '',
      role: '',
      password: '',
      is_active: true,
      e3: true,
      e1: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v.length > 1) || 'Must be at least 2 characters'
      ]
    }
  },
  methods: {
    async create() {
      this.$toast.show('Creating user...', {
        icon: "fingerprint"
      });
      const data = {
        email: this.email,
        password: this.password,
        last_name: this.last_name,
        first_name: this.first_name,
        is_active: this.is_active,
        role: this.role
      }
      await this.$axios.post('https://theelect.herokuapp.com/api/v1/admin/create', data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      }).then(response => {
        this.$toast.success('Successfully Created User', {
          icon: "check"
        });
        this.$router.push(`/settings`);
      }).catch(e => {
        console.log(e);
      })
    }
  }
}
</script>
