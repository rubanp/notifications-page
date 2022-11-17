// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore'
        ]
      }
    ]
  ]
})
