<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  computed: {
    age() {
      return this.$store.getters.age
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: Object.keys(this.$store.getters.age),
      datasets: [
        {
          label: 'Voters',
          backgroundColor: '#4881F9',
          data: Object.values(this.$store.getters.age)
        }
      ]
    })
  }
}
</script>
