import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  base: "summary-vue-3",
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  plugins: [vue()]
})
