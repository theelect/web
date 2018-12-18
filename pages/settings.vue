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
            <td>{{ props.item.role | capitalize }}</td>
            <td>{{ props.item.first_name | capitalize }}</td>
            <td>{{ props.item.last_name | capitalize }}</td>
            <td>{{ props.item.email }}</td>
            <td class="justify-center layout px-0">
              <v-flex mt-2 class="text-xs-center">
                <v-btn icon @click="editClicked(props.item)">
                  <v-icon small class="primary--text">edit</v-icon>
                </v-btn>
              </v-flex>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>

  <v-dialog max-width="450" v-model="editUser">
    <v-card class="px-4 py-4">
      <v-container grid-list-xl fluid>
        <div class="title mb-4">Settings - Edit User</div>
        <v-layout row>
          <v-flex>
            <v-switch color="primary" v-model="userToEdit.is_active">
              <div class="caption" slot="label">Enable</div>
            </v-switch>
          </v-flex>
        </v-layout>

        <v-flex class="">
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field solo v-model="userToEdit.first_name">
                <div slot="label" class="caption">FIRST NAME</div>
              </v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field solo v-model="userToEdit.last_name">
                <div slot="label" class="caption">LAST NAME</div>
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-radio-group v-model="userToEdit.role" row class="mt-5">
            <v-radio color="primary" label="Admin" value="admin"></v-radio>
            <v-radio color="primary" label="View" value="view"></v-radio>
            <v-radio color="primary" label="WC" value="wc"></v-radio>
          </v-radio-group>

          <v-container grid-list-xl>
            <v-layout row wrap mt-4>
              <v-btn xs12 sm6 @click="save(userToEdit)" class="primary caption">SAVE</v-btn>
              <v-btn xs12 sm6 dark @click="cancelEdit" class="red caption spaced-btn">CANCEL</v-btn>
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
      users: [],
      userToEdit: {}
    };
  },
  methods: {
    editClicked(user) {
      this.userToEdit = user
      this.editUser = true;
    },
    cancelEdit() {
      this.userToEdit = {}
      this.editUser = false;
    },
    async save(user) {
      const editedUser = this.$axios.patch(`https://theelect.herokuapp.com/api/v1/user/${user._id}`, user, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        }
      })
      this.cancelEdit();
    }
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
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
};
</script>

<style lang="scss" scoped>
.multiple-btn {
  width: 100px;
}
</style>
