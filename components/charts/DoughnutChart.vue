<script>
import {
  Doughnut
} from 'vue-chartjs'

export default {
  extends: Doughnut,
  computed: {
    occupation() {
      return this.$store.getters.occupation
    },

    myData() {
      if (this.occupation != null) {
        return this.occupation.slice(0, 5).map((item) => item.percentage.toFixed(2) )
      } else {
        return null
      }
    },

    myLabel() {
      if (this.occupation != null) {
        return this.occupation.slice(0, 5).map((item) => item._id )
      } else {
        return null
      }
    }
  },
  mounted() {
    this.renderChart({
      labels: this.myLabel,
      datasets: [{
        backgroundColor: [
          '#4881F9',
          '#99b0e4',
          '#82d5ff',
          '#e3f0f7'
        ],
        data: this.myData,
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false
    },
    )
  }
}
</script>
