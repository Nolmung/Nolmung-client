import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      global: 'globalThis', // global을 globalThis로 매핑
    },
    build: {
      // minify: 'esbuild', // 기본값, esbuild를 사용하여 최소화
      minify: 'terser',
    },
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          icon: true,
        },
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            naverClientId: env.VITE_NAVER_MAP_CLIENT_ID,
          },
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
  };
});
