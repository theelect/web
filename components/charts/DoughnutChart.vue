<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['Engineer', 'Trader', 'Pilot', 'Farmer'],
      datasets: [
        {
          backgroundColor: [
            '#4881F9',
            '#99b0e4',
            '#82d5ff',
            '#e3f0f7'
          ],
          data: [40, 20, 5, 35]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
