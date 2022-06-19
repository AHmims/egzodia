import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  alias: {
    components: resolve(__dirname, './components'),
    resources: resolve(__dirname, './resources'),
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
});
