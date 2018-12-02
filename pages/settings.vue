<template>
<section>
  <v-container fluid>
    <v-layout mb-5>
      <div class="headline">Settings</div>
      <v-layout class="justify-end">
        <v-btn to="/new-user" class="primary caption">
          <v-icon>add</v-icon>NEW USER
        </v-btn>
      </v-layout>
    </v-layout>

    <v-card>
      <v-card-title></v-card-title>
      <v-data-table :headers="headers" :items="users">
        <v-progress-linear slot="no-data" color="blue" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ props.item.role }}</td>
            <td>{{ props.item.first_name }}</td>
            <td>{{ props.item.last_name }}</td>
            <td>{{ props.item.email }}</td>
            <td class="justify-center layout px-0">
              <v-flex mt-2 class="text-xs-center">
                <v-btn icon @click="editUser=true">
                  <v-icon small class="primary--text">edit</v-icon>
                </v-btn>
              </v-flex>
            </td>
          </tr>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
    </v-card>
  </v-container>
  
  <v-dialog max-width="800" v-model="editUser">
    <v-card class="px-4 py-4">
      <v-container grid-list-md fluid>
        <div class="title mb-4">Settings - Edit User</div>
        <v-layout row>
          <v-flex offset-md11 offset-xs8 offset-sm10>
            <v-switch color="primary" v-model="activateSwitch">
              <div class="caption" slot="label">Enable</div>
            </v-switch>
          </v-flex>
        </v-layout>

        <v-flex class="">
          <v-layout row wrap>
            <v-flex sm6 xs12>
              <v-text-field solo>
                <div slot="label" class="caption">FIRST NAME</div>
              </v-text-field>
            </v-flex>

            <v-flex sm6 xs12>
              <v-text-field solo>
                <div slot="label" class="caption">LAST NAME</div>
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row wrap mt-4>
            <v-flex sm6 xs12>
              <v-text-field solo type="password">
                <div slot="label" class="caption">PASSWORD</div>
              </v-text-field>
            </v-flex>

            <v-flex sm6 xs12>
              <v-text-field solo color="primary">
                <div slot="label" class="caption">USERNAME</div>
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-radio-group v-model="roles" row class="mt-5">
            <v-radio color="primary" label="Admin" value="admin"></v-radio>
            <v-radio color="primary" label="View" value="view"></v-radio>
          </v-radio-group>

          <v-container grid-list-md>
            <v-layout row wrap justify-end mt-4>
              <v-btn xs12 sm6 class="primary caption">SAVE</v-btn>
              <v-btn xs12 sm6 dark @click="editUser=false" class="red caption spaced-btn">CANCEL</v-btn>
            </v-layout>
          </v-container>
        </v-flex>
      </v-container>
    </v-card>
  </v-dialog>
</section>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      text: "day",
      editUser: false,
      roles: 'admin',
      activateSwitch: true,
      search: "",
      headers: [{
          text: "Role",
          align: "left",
          value: "role"
        },
        {
          text: "First Name",
          value: "firstName"
        },
        {
          text: "Last Name",
          value: "lastName"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "Actions",
          value: "name",
          sortable: false,
          align: "center"
        }
      ],
      users: []
    };
  },
  mounted() {
    this.$axios.get('https://theelect.herokuapp.com/api/v1/users', {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      })
      .then(response => {
        this.users = response.data;
      })
  },
  methods: {
    capitalizeFirst: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
};
</script>

<style lang="scss" scoped>
.multiple-btn {
  width: 100px;
}
</style>
