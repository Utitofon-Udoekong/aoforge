export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: false },
  compatibilityDate: '2024-10-24',

  // Content configuration
  content: {
    highlight: {
      theme: 'github-light',
      preload: ['lua', 'typescript', 'bash', 'json', 'yaml', 'vue', 'html', 'css', 'javascript']
    }
  },
  
  // Components auto-import
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  
  // CSS configuration
  css: ['~/assets/css/main.css'],
  
  // Build configuration
  build: {
    transpile: ['@nuxt-themes/docus']
  }
})
