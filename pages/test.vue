<template>
<v-card>
  <v-container fluid grid-list-xl>
    <v-layout align-center wrap>
      <v-flex xs12 sm6>
        <div class="mb-2 blue-grey--text caption">SELECT LGA(s)</div>
        <v-select v-model="selectedLgas" :items="lga" box chips multiple>
          <template slot="selection" slot-scope="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption" >(+{{ selectedLgas.length - 1 }} others)</span>
          </template>
          <div slot="label" class="caption">Select LGA(s)</div>
          <v-list-tile slot="prepend-item" ripple @click="toggle">
            <v-list-tile-action>
              <v-icon :color="selectedLgas.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Select All</v-list-tile-title>
          </v-list-tile>
          <v-divider slot="prepend-item" class="mt-2"></v-divider>
        </v-select>
      </v-flex>

      <v-flex xs12 sm6>
        <div class="mb-2 blue-grey--text caption">SELECT WARDS(s)</div>
        <v-select v-model="selectedWards" :items="ward" box chips multiple>
          <template slot="selection" slot-scope="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption" >(+{{ selectedWards.length - 1 }} others)</span>
          </template>
          <div slot="label" class="caption">Select WARDS(s)</div>
          <v-list-tile slot="prepend-item" ripple @click="toggleWards">
            <v-list-tile-action>
              <v-icon :color="selectedWards.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Select All</v-list-tile-title>
          </v-list-tile>
          <v-divider slot="prepend-item" class="mt-2"></v-divider>
        </v-select>
      </v-flex>

      <v-flex xs12 sm6>
        <div class="mb-2 blue-grey--text caption">SELECT AGE GROUP(s)</div>
        <v-select v-model="selectedAges" :items="ages" box chips multiple>
          <template slot="selection" slot-scope="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption" >(+{{ selectedAges.length - 1 }} others)</span>
          </template>
          <div slot="label" class="caption">SELECT AGE GROUP(s)</div>
          <v-list-tile slot="prepend-item" ripple @click="toggleAges">
            <v-list-tile-action>
              <v-icon :color="selectedAges.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Select All</v-list-tile-title>
          </v-list-tile>
          <v-divider slot="prepend-item" class="mt-2"></v-divider>
        </v-select>
      </v-flex>

      <v-flex xs12 sm6>
        <div class="mb-2 blue-grey--text caption">SELECT GENDER(s)</div>
        <v-select v-model="selectedGenders" :items="genders" box chips multiple>
          <div slot="label" class="caption">SELECT GENDER(s)</div>
        </v-select>
      </v-flex>

      <v-flex xs12 sm6>
        <div class="mb-2 blue-grey--text caption">SELECT DOB(s)</div>
        <v-select v-model="selectedDobs" :items="dobs" box chips multiple>
          <template slot="selection" slot-scope="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption" >(+{{ selectedDobs.length - 1 }} others)</span>
          </template>
          <div slot="label" class="caption">SELECT DOB(s)</div>
          <v-list-tile slot="prepend-item" ripple @click="toggleDobs">
            <v-list-tile-action>
              <v-icon :color="selectedDobs.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Select All</v-list-tile-title>
          </v-list-tile>
          <v-divider slot="prepend-item" class="mt-2"></v-divider>
        </v-select>
      </v-flex>

      <v-flex xs12 sm6>
        <div class="mb-2 blue-grey--text caption">SELECT PROFESSION(s)</div>
        <v-select v-model="selectedProfessions" :items="professions" box chips multiple>
          <template slot="selection" slot-scope="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption" >(+{{ selectedProfessions.length - 1 }} others)</span>
          </template>
          <div slot="label" class="caption">SELECT DOB(s)</div>
          <v-list-tile slot="prepend-item" ripple @click="toggleProfessions">
            <v-list-tile-action>
              <v-icon :color="selectedProfessions.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Select All</v-list-tile-title>
          </v-list-tile>
          <v-divider slot="prepend-item" class="mt-2"></v-divider>
        </v-select>
      </v-flex>
    </v-layout>
  </v-container>
</v-card>
</template>

<script>
export default {
  layout: 'dashboard',
  data: () => ({
    lgas: [],
    professions: [],
    ages: ['18-30', '31-40', '41-50', '51-60', '61-100'],
    genders: ['Male', 'Female'],
    dobs: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    selectedDobs: [],
    selectedGenders: [],
    selectedAges: [],
    selectedLgas: [],
    selectedWards: [],
    selectedProfessions: []    
  }),
  created: async function () {
    this.$axios.$get('/lgas', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    }).then(response => (this.lgas = response))

    this.$axios.$get('/pvc/occupation', {
      headers: {
        apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
      }
    }).then(response => (this.professions = response))
  },
  computed: {
    lga() {
      const filteredLga = []
      this.lgas.forEach(element => {
        filteredLga.push(element.name)
      });
      return filteredLga
    },
    ward() {
      const filteredWard = []
      this.lgas.forEach(element => {
        filteredWard.push(element.wards)
      });

      return [].concat.apply([], filteredWard)
    },
    likesAllLgas() {
      return this.selectedLgas.length === this.lga.length
    },
    likesSomeLgas() {
      return this.selectedLgas.length > 0 && !this.likesAllLgas
    },
    icon() {
      if (this.likesAllLgas) return 'mdi-close-box'
      if (this.likesSomeLgas) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },

    likesAllWards() {
      return this.selectedWards.length === this.ward.length
    },
    likesSomeWards() {
      return this.selectedWards.length > 0 && !this.likesAllWards
    },
    icon() {
      if (this.likesAllWards) return 'mdi-close-box'
      if (this.likesSomeWards) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },

    likesAllAges() {
      return this.selectedAges.length === this.ward.length
    },
    likesSomeAges() {
      return this.selectedAges.length > 0 && !this.likesAllAges
    },
    icon() {
      if (this.likesAllAges) return 'mdi-close-box'
      if (this.likesSomeAges) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },

    likesAllDobs() {
      return this.selectedDobs.length === this.dobs.length
    },
    likesSomeDobs() {
      return this.selectedDobs.length > 0 && !this.likesAllDobs
    },
    icon() {
      if (this.likesAllDobs) return 'mdi-close-box'
      if (this.likesSomeDobs) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },

    likesAllProfessions() {
      return this.selectedProfessions.length === this.professions.length
    },
    likesSomeProfessions() {
      return this.selectedProfessions.length > 0 && !this.likesAllProfessions
    },
    icon() {
      if (this.likesAllProfessions) return 'mdi-close-box'
      if (this.likesSomeProfessions) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    }
  },

  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllLgas) {
          this.selectedLgas = []
        } else {
          this.selectedLgas = this.lga.slice()
        }
      })
    },
    toggleWards() {
      this.$nextTick(() => {
        if (this.likesAllWards) {
          this.selectedWards = []
        } else {
          this.selectedWards = this.ward.slice()
        }
      })
    },

    toggleAges() {
      this.$nextTick(() => {
        if (this.likesAllAges) {
          this.selectedAges = []
        } else {
          this.selectedAges = this.ages.slice()
        }
      })
    },

    toggleDobs() {
      this.$nextTick(() => {
        if (this.likesAllDobs) {
          this.selectedDobs = []
        } else {
          this.selectedDobs = this.dobs.slice()
        }
      })
    },

    toggleProfessions() {
      this.$nextTick(() => {
        if (this.likesAllProfessions) {
          this.selectedProfessions = []
        } else {
          this.selectedProfessions = this.professions.slice()
        }
      })
    }
  }

}
</script>
