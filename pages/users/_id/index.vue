<template>
<section>
  <v-container grid-list-md fluid>
    <div class="headline mb-5">Settings - Edit User</div>

    <v-card class="px-4 pb-4 pt-1">
      <v-layout row>
        <v-flex offset-md11 offset-xs8 offset-sm10>
          <v-switch color="primary" v-model="activateSwitch">
            <div class="caption" slot="label">Enable</div>
          </v-switch>
        </v-flex>
      </v-layout>

      <v-flex class="pa-4">
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
          <v-btn xs12 sm6 dark class="red caption spaced-btn">CANCEL</v-btn>
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
  data: () => ({
    roles: 'admin',
    activateSwitch: true
  })
}
</script>
