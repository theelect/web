<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  computed: {
    ageGot() {
      return this.$store.getters.age
    },

    age() {
      if (this.ageGot) {
        return this.ageGot
      }else {
        return {}
      }
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: Object.keys(this.age),
      datasets: [
        {
          label: 'Voters',
          backgroundColor: '#4881F9',
          data: Object.values(this.age)
        }
      ]
    })
  }
}
</script>
