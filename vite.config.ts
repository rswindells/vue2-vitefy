/// <reference types="vitest" />
// ^^ Required for using vitest config within vite config (or create separate file)
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

// vuetify-loader equivalent for vite
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: [
          '@import "./src/assets/scss/overrides"',
          '@import "vuetify/src/styles/settings/_variables"',
          '' // end with newline
        ].join('\n')
      }
    }
  },
  plugins: [
    vue2(),
    vue2Jsx(),
    legacy({
      // targets: ['ie >= 11'],
      targets: ['> 1%', 'last 2 versions', 'not dead'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    Components({
      resolvers: [VuetifyResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    deps: {
      inline: ['vuetify']
    },
    setupFiles: ['./src/components/__tests__/vitest.setup.ts']
  },
  server: {
    host: true, // needed for docker
    port: 8080
  }
})
