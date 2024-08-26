import * as path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host:true,
    port: 8081,
    proxy: {
      '^/usrpotl/': {
        target: 'localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace()
      },
      '^/amnpotl/': {
        target: 'localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace()
      },
      '^/api/': {
        target: 'localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace()
      },
      '^/comn/': {
        target: 'localhost:5000',
        //target: 'http://ec2-43-200-216-49.ap-northeast-2.compute.amazonaws.com:8280',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace()
      }
    }
  }
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "@/assets/scss/main.scss";'
  //     }
  //   }
  // }
})
