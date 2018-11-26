<template>
<section>
  <v-container fluid>
    <v-layout mb-5>
      <div class="headline">Settings</div>
      <v-layout class="justify-end">
        <v-btn to="/new-user" class="primary caption">
          <v-icon>add</v-icon> NEW USER
        </v-btn>
      </v-layout>
    </v-layout>

    <v-card>
      <v-card-title>
      </v-card-title>
      <v-data-table :headers="headers" :items="users">
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ props.item.role }}</td>
            <td>{{ props.item.firstName }}</td>
            <td>{{ props.item.lastName }}</td>
            <td>{{ props.item.username }}</td>
            <td class="justify-center layout px-0">
              <v-flex mt-2 class="text-xs-center">
                <v-btn icon to="/edit-user">
                  <v-icon small class="primary--text">edit</v-icon>
                </v-btn>
              </v-flex>
            </td>
          </tr>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
  </v-container>
</section>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      text: 'day',
      search: '',
      headers: [{
          text: 'Role',
          align: 'left',
          value: 'role'
        },
        {
          text: 'First Name',
          value: 'firstName'
        },
        {
          text: 'Last Name',
          value: 'lastName'
        },
        {
          text: 'Username',
          value: 'username'
        },
        {
          text: 'Actions',
          value: 'name',
          sortable: false,
          align: 'center'
        }
      ],
      users: [{
          value: false,
          role: 'Admin',
          firstName: 'Edo',
          lastName: 'Williams',
          username: 'edoman'
        },
        {
          value: false,
          role: 'View',
          firstName: 'Sam',
          lastName: 'Ogunjumbi',
          username: 'samHunter'
        },
        {
          value: false,
          role: 'Admin',
          firstName: 'Ismail',
          lastName: 'Olasunkanmi',
          username: 'Abbey'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.multiple-btn {
  width: 100px;
}
</style>
