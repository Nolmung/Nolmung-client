import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
// @ts-ignore
import imageminMozjpeg from 'imagemin-mozjpeg';
// @ts-ignore
import imageminSvgo from 'imagemin-svgo';
import imageminPngquant from 'imagemin-pngquant';
// @ts-ignore
import imageminWebp from 'imagemin-webp';
import compression from 'vite-plugin-compression';
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

      compression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240,
        verbose: true,
      }),

      /** 이미지 최적화 */
      viteImagemin({
        plugins: {
          jpg: imageminMozjpeg({ quality: 75 }), // JPEG 최적화
          png: imageminPngquant({ quality: [0.6, 0.8] }), // PNG 최적화
          svg: imageminSvgo({
            plugins: [
              { name: 'removeViewBox', active: true }, // viewBox 제거
              { name: 'removeEmptyAttrs', active: false }, // 빈 속성 유지
            ],
          }), // SVG 최적화
        },
        makeWebp: {
          plugins: {
            jpg: imageminWebp({ quality: 70 }), // JPEG -> WebP 변환
            png: imageminWebp({ quality: 70 }), // PNG -> WebP 변환
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
