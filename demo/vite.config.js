import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  base: '/vue-ccard/',
  resolve: {
    alias: {
      'vue-ccard': resolve(__dirname, '../src/vue-ccard.vue'),
    },
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
});

