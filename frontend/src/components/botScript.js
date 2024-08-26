import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'BotListPage',
  data() {
    return {
      loading: true,
      showSettingsForBot: null,
      botSettings: {}, // 봇별 설정 데이터를 저장하는 객체
      originalSettings: {}
    };
  },
  computed: {
    ...mapGetters(['bots', 'errorLogs'])
  },
  methods: {
    ...mapActions(['fetchBots', 'fetchErrorLogs']),
    getStatusText(status) {
      switch (status) {
        case 1:
          return '동작중';
        case 2:
          return '오류';
        case 3:
          return '중지';
        default:
          return '알 수 없음';
      }
    },
    getStatusClass(status) {
      return {
        running: status === 1,
        error: status === 2,
        stopped: status === 3
      };
    },
    async toggleSettings(botId) {
      console.log('Toggling settings for bot:', botId);
      if (this.showSettingsForBot === botId) {
        this.showSettingsForBot = null;
      } else {
        // 봇 설정을 로드
        const hasSettings = await this.loadBotSettings(botId);
        if (hasSettings) {
          this.showSettingsForBot = botId;
          this.originalSettings[botId] = { ...this.botSettings[botId] };
        }
      }
    },
    async loadBotSettings(botId) {
      console.log('Loading settings for bot:', botId);
      const token = this.$store.state.token;
      try {
        const response = await axios.get(`/bot/bot-settings/${botId}/load-setting`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('Loaded settings:', response.data);
        if (Object.keys(response.data).length > 0) {
          this.botSettings = { ...this.botSettings, [botId]: response.data };
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Failed to load bot settings', error);
        return false;
      }
    },
    async saveSettings(botId) {
      console.log('Saving settings for bot:', botId);
      const token = this.$store.state.token;
      try {
        await axios.post(`/bot/bot-settings/${botId}`, this.botSettings[botId], {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(`Settings saved for bot ${botId}:`, this.botSettings[botId]);
        this.showSettingsForBot = null;
      } catch (error) {
        console.error('Failed to save bot settings', error);
      }
    },
    cancelSettings(botId) {
      this.botSettings[botId] = { ...this.originalSettings[botId] };
      this.showSettingsForBot = null;
    },
    async fetchInitialData() {
      console.log('Fetching initial data');
      try {
        await this.fetchBots();
        await this.fetchErrorLogs();
      } finally {
        this.loading = false;
      }
    },
    async restartBot(botId) {
      console.log(`Restarting bot ${botId}`);
      const token = this.$store.state.token;
      try {
        await axios.post(`/bot/bots/${botId}/restart`, null, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        await this.fetchBots();
        console.log(`Bot ${botId} 재시동`);
      } catch (error) {
        console.error(`Bot ${botId} 재시동 중 오류가 발생했습니다:`, error);
      }
    },
    async stopBot(botId) {
      console.log(`Stopping bot ${botId}`);
      const token = this.$store.state.token;
      try {
        await axios.post(`/bot/bots/${botId}/stop`, null, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        await this.fetchBots();
        console.log(`Bot ${botId} 중지`);
      } catch (error) {
        console.error(`Bot ${botId} 중지 중 오류가 발생했습니다:`, error);
      }
    }
  },
  mounted() {
    this.fetchInitialData();
  }
};
