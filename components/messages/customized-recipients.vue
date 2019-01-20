<template>
<v-container fluid>
  <v-stepper v-model="step" vertical>
    <v-stepper-step editable :complete="step > 1" step="1">
      Recipients
      <small>Who are you sending this message to?</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card flat class="mb-2">
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
              <div class="mb-2 blue-grey--text caption">SELECT PROFESSION(s)</div>
              <v-select v-model="selectedProfessions" :items="professions" box chips multiple>
                <template slot="selection" slot-scope="{ item, index }">
                  <v-chip v-if="index === 0">
                    <span>{{ item }}</span>
                  </v-chip>
                  <span v-if="index === 1" class="grey--text caption" >(+{{ selectedProfessions.length - 1 }} others)</span>
                </template>
                <div slot="label" class="caption">SELECT PROFESSION(s)</div>
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

      <v-container grid-list-xl>
        <v-btn @click="step = 2" xs12 sm6 class="primary caption">CONTINUE</v-btn>
      </v-container>
    </v-stepper-content>

    <v-stepper-step :complete="step > 2" step="2">Content</v-stepper-step>

    <v-stepper-content step="2">
      <v-card flat class="mb-4">
        <v-container grid-list-xl>

          <div class="mb-4">
            <div class="caption blue-grey--text">MESSAGE TYPE</div>
            <v-radio-group v-model="smsType" row>
              <v-radio label="Immediate" @change="immediate" value="immediate" color="primary"></v-radio>
              <v-radio label="Scheduled" @change="is_scheduled=true" value="scheduled" color="primary"></v-radio>
            </v-radio-group>
          </div>

          <v-layout row wrap>
            <v-flex xs12 sm6 v-if="is_scheduled">
              <div class="caption blue-grey--text">SCHEDULED DATE</div>
              <v-menu v-model="dateMenu" :close-on-content-click="false" full-width max-width="290">
                <v-text-field box append-icon="event" slot="activator" :value="sendDate" readonly>
                  <div class="caption" slot="label">Select a schedule date</div>
                </v-text-field>
                <v-date-picker v-model="date" @change="dateMenu = false"></v-date-picker>
              </v-menu>
            </v-flex>

            <v-flex xs12 sm6>
              <div class="caption blue-grey--text">SENDER'S NAME</div>
              <v-text-field disabled box v-model="sender"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>

        <v-container>
          <v-textarea v-model="message" auto-grow box color="primary" rows="8" counter>
            <div class="caption" slot="label">Message</div>
          </v-textarea>
        </v-container>
      </v-card>

      <v-container grid-list-md>
        <v-btn v-if="is_scheduled" xs12 sm6 class="primary caption" @click="sendMessage">SEND MESSAGE</v-btn>
        <v-btn v-else xs12 sm6 class="primary caption" @click="sendMessageImmediate">SEND MESSAGE</v-btn>
        <v-btn @click="step = 1" xs12 sm6 dark class="red caption">BACK</v-btn>
      </v-container>
    </v-stepper-content>
  </v-stepper>
</v-container>
</template>

<style lang="scss" scoped>
.v-btn {
  min-width: 20px;
}
</style>

<script>
import moment from "moment";
export default {
  layout: 'dashboard',
  data: () => ({
    message: '',
    smsType: 'immediate',
    is_scheduled: false,
    step: 1,
    lgas: [],
    professions: [],
    ages: ['18-30', '31-40', '41-50', '51-60', '61-100'],
    genders: ['male', 'female'],
    selectedGenders: [],
    selectedAges: [],
    selectedLgas: [],
    selectedWards: [],
    selectedProfessions: [],
    sender: 'Tonye Cole',
    date: '',
    dateMenu: false,
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
    sendDate() {
      return this.date ? moment(this.date).format("MMMM Do YYYY") : "";
    },
    mydate() {
      let mydate = moment(this.date).toISOString()
      return mydate
    },
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
    async sendMessage() {
      const data = {
        message: this.message,
        is_scheduled: this.is_scheduled,
        schedule_date: this.mydate
      }
      await this.$axios.$post(`/sms?gender=${this.selectedGenders}&lga=${this.selectedLgas}&ward=${this.selectedWards}&profession=${this.selectedProfessions}&age=${this.selectedAges}`, data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        },
      }).then(response => {
        this.$toast.success(response.message, {
          icon: "check"
        })
        this.$router.push('/messages')
      })

    },

    async sendMessageImmediate() {
      const data = {
        is_scheduled: this.is_scheduled,
        message: this.message
      }
      await this.$axios.$post(`/sms?gender=${this.selectedGenders}&lga=${this.selectedLgas}&ward=${this.selectedWards}&profession=${this.selectedProfessions}&age=${this.selectedAges}`, data, {
        headers: {
          apiKey: "i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD"
        },
      }).then(response => {
        this.$toast.success(response.message, {
          icon: "check"
        })
        this.$router.push('/messages')
      })

    },

    immediate() {
      this.is_scheduled = false
      this.date = ''
    },

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
