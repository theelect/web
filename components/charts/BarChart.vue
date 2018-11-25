<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['20-30', '30-40', '40-50', '50-60', '60-70', '70-80'],
      datasets: [
        {
          label: 'Voters',
          backgroundColor: '#4881F9',
          data: [40, 20, 12, 39, 20, 40]
        }
      ]
    })
  }
}
</script>
