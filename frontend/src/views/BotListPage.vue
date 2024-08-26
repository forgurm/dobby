<template>
  <div class="bot-list">
    <table>
      <thead>
        <tr>
          <th>봇번호</th>
          <th>봇 이름</th>
          <th>동작 상태</th>
          <th class="full-width-column">재시동</th>
          <th class="full-width-column">중지</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="5">Loading...</td>
        </tr>
        <template v-else v-for="bot in bots" :key="bot.id">
          <tr @click="toggleSettings(bot.id)" :class="{ 'highlighted-row': showSettingsForBot === bot.id }">
            <td>{{ bot.id }}</td>
            <td>{{ bot.name }}</td>
            <td :class="getStatusClass(bot.status)">
              {{ getStatusText(bot.status) }}
            </td>
            <td><button class="full-width-button pastel-restart-button" @click.stop="restartBot(bot.id)">재시동</button></td>
            <td><button class="full-width-button pastel-stop-button" @click.stop="stopBot(bot.id)">중지</button></td>
          </tr>
          <tr v-if="showSettingsForBot === bot.id" class="settings-row">
            <td colspan="5">
              <div class="settings-content">
                <template v-if="botSettings[bot.id] && Object.keys(botSettings[bot.id]).length">
                  <template v-for="(setting, key) in botSettings[bot.id]" :key="key">
                    <label :for="key">{{ setting.name }}:</label>
                    <textarea :id="key" v-model="setting.value" rows="3" width='99%'></textarea>
                  </template>
                  <div class="button-group">
                    <button @click="saveSettings(bot.id)">저장</button>
                    <button @click="cancelSettings(bot.id)">취소</button>
                  </div>
                </template>
                <template v-else>
                  <p>No settings available for this bot.</p>
                </template>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <h2 class="error-title">에러 로그</h2>
    <ul class="error-logs">
      <li v-for="log in errorLogs" :key="log.id">
        [{{ log.error_time }}] {{ log.bot_name }}: {{ log.error_message }}
      </li>
    </ul>
  </div>
</template>


<script>
import botScript from '@/components/botScript';

export default {
  ...botScript
};
</script>

<style src="../assets/css/bot.css"></style>