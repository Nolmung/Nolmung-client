import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@common', replacement: '/src/common' },
      { find: '@mocks', replacement: '/src/mocks' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@service', replacement: '/src/service' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@stores', replacement: '/src/stores' },
    ],
  },
  // 로컬 호스트 바깥에서도 접근 가능하도록 설정
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
