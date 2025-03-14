import path from 'path';
import { defineConfig } from 'vite';
// import proxyOptions from './proxyOptions';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Test PWA APP name',
        short_name: 'Vite PWA Project',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
      },

      customInstallPrompt: true,
      customInstallPromptConfig: {
        title: 'Install Test PWA App',
        message: 'Install this app to use it offline.',
        button: 'Install'
      }
    })
  ],
  server: {
    port: 8080,
    // proxy: proxyOptions
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: '../luckybee_customization/public/grn_pwa',
    emptyOutDir: true,
    target: 'es2015',
  },
});
