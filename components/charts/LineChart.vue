<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Occupancy',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40, 64, 55, 72, 36, 15]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
