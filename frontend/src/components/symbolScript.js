// symbolScript.js
import axios from 'axios';

export default {
  name: 'SymbolPage',
  props: ['exchangeCode'],
  data() {
    return {
      exchanges: [],
      selectedTab: 0,
      updateStatus: null,
      showModal: false,
      isMobile: false
    };
  },
  computed: {
    selectedTabTitle() {
      return this.exchanges[this.selectedTab] ? this.exchanges[this.selectedTab].exchange_name : '';
    }
  },
  watch: {
    exchangeCode(newCode) {
      this.fetchExchangeInfo(newCode);
    }
  },
  methods: {
    async fetchExchangeInfoSummary() {
      try {
        const response = await axios.get('/symbol/exchange-info-summary', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.exchanges = response.data;
        if (this.exchanges.length > 0) {
          const initialIndex = this.exchanges.findIndex(exchange => exchange.exchange_code === this.exchangeCode);
          this.selectedTab = initialIndex !== -1 ? initialIndex : 0;
          this.fetchExchangeInfo(this.exchangeCode);
        }
      } catch (error) {
        console.error('Error fetching exchange info summary:', error);
      }
    },
    async fetchExchangeInfo(exchange_code) {
      try {
        const response = await axios.get(`/symbol/exchange-info?exchange_code=${exchange_code}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        const groupedData = this.groupBy(response.data, 'exchange_name');
        this.exchanges = this.exchanges.map(exchange => {
          if (exchange.exchange_code === exchange_code) {
            return {
              ...exchange,
              symbol_count: groupedData[exchange.exchange_name][0].symbol_count,
              empty_count: groupedData[exchange.exchange_name].filter(symbol => !symbol.symbol_name).length,
              symbols: groupedData[exchange.exchange_name].sort((a, b) => {
                const formattedA = this.formatSymbolCode(a.symbol_code);
                const formattedB = this.formatSymbolCode(b.symbol_code);
                if (!a.symbol_name && b.symbol_name) return -1;
                if (a.symbol_name && !b.symbol_name) return 1;
                return formattedA.localeCompare(formattedB);
              })
            };
          }
          return exchange;
        });
      } catch (error) {
        console.error('Error fetching exchange info:', error);
      }
    },
    groupBy(array, key) {
      return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
      }, {});
    },
    selectTab(index, exchange_code) {
      this.selectedTab = index;
      this.fetchExchangeInfo(exchange_code);
      this.updateStatus = null;
      this.showModal = false;
      this.$router.push({ name: 'SymbolPage', params: { exchangeCode: exchange_code } });
    },
    async updateAllSymbols() {
      try {
        const symbolsToUpdate = this.exchanges[this.selectedTab].symbols
          .filter(symbol => symbol.symbol_name && symbol.symbol_name.trim() !== '')
          .map(symbol => ({ symbol_name: symbol.symbol_name, symbol_code: symbol.symbol_code }));
        await axios.post('/symbol/update-symbols', symbolsToUpdate, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        this.updateStatus = '성공';
        this.fetchExchangeInfo(this.exchanges[this.selectedTab].exchange_code);
      } catch (error) {
        console.error('Error updating symbols:', error);
        this.updateStatus = '실패';
      }
    },
    formatSymbolCode(symbolCode) {
      return symbolCode.replace(/USDT|_USDT|_usdt|UMCBL/g, '').toUpperCase();
    },
    checkViewport() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  created() {
    this.fetchExchangeInfoSummary();
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport);
  },
  mounted() {
    document.title = '심볼'; // 페이지 타이틀 설정
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewport);
  }
};
