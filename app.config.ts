// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'ao-forge',
    description: 'CLI tool to create AO-powered applications',
    image: '/aoforge-banner.png',
    socials: {
      github: 'https://github.com/Utitofon-Udoekong/aoforge-cli/tree/release/2.0.0?tab=readme-ov-file',
      twitter: '@ao_forge',
      npm: {
        label: 'NPM',
        icon: 'devicon:npm',
        rel: 'noopener',
        href: 'https://www.npmjs.com/package/ao-forge'
      }
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: '',
        text: 'Powered by AO',
        href: 'https://aoforge.vercel.app'
      }
    }
  }
})