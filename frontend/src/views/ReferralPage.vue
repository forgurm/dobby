<template>
  <div class="referral-page">
    <h2>레퍼럴</h2>
    <div class="total-assets">
      총 자산: {{ totalAssets.toLocaleString() }} 원
    </div>
    <div class="chart-container">
      <canvas id="referralChart"></canvas>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js/auto';

export default {
  name: 'ReferralPage',
  setup() {
    const totalAssets = ref(1000000); // 총 자산 예시 값

    onMounted(() => {
      const ctx = document.getElementById('referralChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: '총 자산',
            data: [100000, 200000, 300000, 400000, 500000, 600000, 700000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return value.toLocaleString() + ' 원';
                }
              }
            }
          }
        }
      });
    });

    return {
      totalAssets
    };
  }
};
</script>

<style scoped>
.referral-page {
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.total-assets {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 20px;
}

.chart-container {
  height: 400px;
}
</style>
