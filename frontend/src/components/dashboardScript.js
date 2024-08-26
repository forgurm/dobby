import { onMounted, ref, nextTick, computed, onUnmounted } from 'vue';
import { Chart, ArcElement, Legend, Title, DoughnutController, PieController } from 'chart.js';
import axios from 'axios';
import { useRouter } from 'vue-router';

Chart.register(ArcElement, Legend, Title, DoughnutController, PieController);

export default {
  setup() {
    const running = ref(0);
    const error = ref(0);
    const stopped = ref(0);
    const exchanges = ref([]);
    const router = useRouter();
    const charts = ref({}); // 차트 인스턴스를 저장할 객체

    const utilizationRate = computed(() => {
      if (running.value === 0 && error.value === 0 && stopped.value === 0) return 0;
      return Math.round((running.value / (running.value + error.value + stopped.value)) * 100);
    });

    const createChart = async (exchange) => {
      await nextTick(); // Ensure DOM is updated
      const canvas = document.getElementById(`chart-${exchange.exchange_code}`);
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          console.error(`Failed to get 2D context for canvas with id chart-${exchange.exchange_code}`);
          return;
        }
        const totalSymbols = exchange.symbol_count;
        const emptySymbols = exchange.empty_count;
        const chart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['빈 심볼', '전체 심볼'],
            datasets: [
              {
                data: [emptySymbols, totalSymbols - emptySymbols],
                backgroundColor: ['#1E90FF', '#DCDCDC'],
                borderWidth: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false // 툴팁 비활성화
              }
            },
            animation: {
              animateRotate: true,
              animateScale: true
            },
            onClick: (e) => {
              const points = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
              if (points.length) {
                router.push({ name: 'SymbolPage', params: { exchangeCode: exchange.exchange_code } });
              }
            }
          },
          plugins: [{
            afterDatasetsDraw: function (chart) {
              const { ctx, chartArea: { width, height } } = chart;
              if (!ctx) {
                console.error('Canvas context is null');
                return;
              }
              ctx.save();
              ctx.font = 'bold 24px Arial'; // 두 배로 키우고 볼드 처리
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = 'red'; // 빨간색으로 변경
              const x = width / 2;
              const y = height / 2;
              ctx.fillText(`${emptySymbols}`, x, y - 5); // 숫자를 가운데로 위치
              ctx.font = 'bold 12px Arial'; // 거래소명 폰트 크기 조정
              ctx.fillStyle = 'black'; // 검은색으로 변경
              ctx.fillText(`${exchange.exchange_name}`, x, y + 15); // 거래소명을 숫자 아래로 위치
              ctx.restore();
            }
          }]
        });
        charts.value[exchange.exchange_code] = chart; // Store the chart instance
      } else {
        console.error(`Canvas with id chart-${exchange.exchange_code} not found`);
      }
    };

    const fetchBotInfo = async () => {
      try {
        const response = await axios.get('/bot/bots', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        const bots = response.data;
        running.value = bots.filter(bot => bot.status === 1).length;
        error.value = bots.filter(bot => bot.status === 2).length;
        stopped.value = bots.filter(bot => bot.status === 3).length;

        // Initialize bot chart
        const canvas = document.getElementById('botChart');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            console.error('Failed to get 2D context for botChart canvas');
            return;
          }
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['동작', '오류', '중지'],
              datasets: [
                {
                  data: [running.value, error.value, stopped.value],
                  backgroundColor: ['#00FF00', '#FF0000', '#DCDCDC'],
                  borderWidth: 0,
                  borderRadius: 0,
                  cutout: '75%' // 반원형 차트
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              rotation: -90,
              circumference: 180,
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  enabled: false // 툴팁 비활성화
                }
              },
              animation: {
                animateRotate: true,
                animateScale: true,
                onComplete: function() {
                  try {
                    const meta = this.data.datasets[0]._meta;
                    if (meta && Object.keys(meta).length > 0) {
                      const firstMeta = meta[Object.keys(meta)[0]];
                      firstMeta.controller.pivot();
                    }
                  } catch (error) {
                    console.error('Animation complete error:', error);
                  }
                }
              }
            }
          });
        } else {
          console.error('Canvas with id botChart not found');
        }
      } catch (error) {
        console.error('Error fetching bot info:', error);
      }
    };

    onMounted(async () => {
      try {
        console.log('DashboardPage onMounted');
        const response = await axios.get('/symbol/exchange-info-summary', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        exchanges.value = response.data.filter(exchange => exchange.empty_count > 0);

        for (const exchange of exchanges.value) {
          await createChart(exchange);
        }

        await fetchBotInfo();
      } catch (error) {
        console.error('Error fetching exchange info summary:', error);
      }
    });

    // Remove chart instances when the component is unmounted
    onUnmounted(() => {
      Object.values(charts.value).forEach(chart => {
        chart.destroy();
      });
    });

    return {
      running,
      error,
      stopped,
      exchanges,
      utilizationRate,
      charts // Add charts to the returned object
    };
  },
  methods: {
    goToSymbolPage(exchangeCode) {
      // Check if the chart exists before handling the event
      if (this.charts && this.charts[exchangeCode]) {
        this.$router.push({ name: 'SymbolPage', params: { exchangeCode: exchangeCode } });
      } else {
        console.error(`Chart for exchange ${exchangeCode} does not exist`);
      }
    }
  }
};
