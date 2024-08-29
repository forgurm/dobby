import * as path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// __dirname을 대체하는 방법
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
    port: 8081,
    proxy: {
      '^/api/': {
        target: 'http://localhost:5001', // 프로토콜 포함
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')  // '/api'를 백엔드 경로로 리라이트
      }
      // '^/comn/': {
      //   target: 'http://localhost:5001', // 프로토콜 포함
      //   changeOrigin: true,
      //   secure: false,
      //   ws: true,
      //   rewrite: (path) => path.replace(/^\/comn/, '')  // '/comn'을 백엔드 경로로 리라이트
      // },
      // '^/main/': {
      //   target: 'http://localhost:5001', // 프로토콜 포함
      //   changeOrigin: true,
      //   secure: false,
      //   ws: true,
      //   rewrite: (path) => path.replace(/^\/main/, '')  // '/main'을 백엔드 경로로 리라이트
      // },
    }
  }
});