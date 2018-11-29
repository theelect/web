<script>
import {
  Doughnut
} from 'vue-chartjs'

export default {
  extends: Doughnut,
  computed: {
    occupation() {
      return this.$store.getters.occupation
    }
  },
  mounted() {
    this.renderChart({
      labels: this.$store.getters.occupation.slice(0, 5).map((item) => item._id ),
      datasets: [{
        backgroundColor: [
          '#4881F9',
          '#99b0e4',
          '#82d5ff',
          '#e3f0f7'
        ],
        data: this.$store.getters.occupation.slice(0, 5).map((item) => item.percentage.toFixed(2) ),
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
</script>
