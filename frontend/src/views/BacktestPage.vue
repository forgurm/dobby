<template>
  <div class="backtest-page">
    <h2>백테스트</h2>
    <button @click="runBacktest">백테스트 실행</button>
    <div v-if="chartData">
      <canvas id="backtestChart"></canvas>
    </div>
    <ul v-if="results.length">
      <li v-for="result in results" :key="result.timestamp">
        {{ result.timestamp }} - {{ result.signal }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { loadData } from '../utils/dataLoader';
import { backtest, sampleStrategy } from '../utils/backtest';

Chart.register(...registerables);

export default {
  name: 'BacktestPage',
  data() {
    return {
      results: [],
      chartData: null
    };
  },
  methods: {
    async runBacktest() {
      const data = await loadData('path/to/your/data.csv'); // 실제 데이터 경로로 변경하세요.
      this.results = backtest(data, sampleStrategy);
      this.chartData = this.formatChartData(this.results);
      this.renderChart();
    },
    formatChartData(results) {
      return {
        labels: results.map(r => r.timestamp),
        datasets: [
          {
            label: 'Signals',
            data: results.map(r => (r.signal === 'buy' ? 1 : r.signal === 'sell' ? -1 : 0)),
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)'
          }
        ]
      };
    },
    renderChart() {
      const ctx = document.getElementById('backtestChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'minute'
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  if (value === 1) return 'Buy';
                  if (value === -1) return 'Sell';
                  return '';
                }
              }
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.backtest-page {
  padding: 20px;
}
#backtestChart {
  width: 100%;
  height: 400px;
}
</style>
