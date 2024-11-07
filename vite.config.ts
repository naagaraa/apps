import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { obfuscator } from 'rollup-obfuscator'
import compression from 'vite-plugin-compression2'
import ssr from 'vite-plugin-ssr/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    obfuscator(),
    // ssr(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => ['swiper', 'swiper-slide'].includes(tag),
        },
      },
    }),
    // vueDevTools({}),
    compression({
      algorithm: 'brotliCompress',
      exclude: '.br',
    }),
  ],
  ssr: {
    noExternal: ['vue-router'], // Configure SSR-specific settings
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split specific libraries into separate chunks
          vendor: ['vue', 'vue-router'], // Common libraries
          swiper: ['swiper'],
          vCalendar: ['v-calendar'],
          veeValidate: ['vee-validate'],
          pinia: ['pinia'],
          flowbite: ['flowbite'],
          bootstrap: ['bootstrap'],
          popper: ['@popperjs/core'],
          rxjs: ['@reactivex/rxjs'],
          motion: ['@vueuse/motion'],
        },
      },
      preserveEntrySignatures: 'strict',
    },
    sourcemap: true,
  },
})
