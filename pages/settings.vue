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
        <template slot="no-data">Loading...</template>
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ capitalizeFirst(props.item.role) }}</td>
            <td>{{ capitalizeFirst(props.item.first_name) }}</td>
            <td>{{ capitalizeFirst(props.item.last_name) }}</td>
            <td>{{ props.item.email }}</td>
            <td class="justify-center layout px-0">
              <v-flex mt-2 class="text-xs-center">
                <v-btn icon to="/edit-user">
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
</section>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      text: "day",
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
