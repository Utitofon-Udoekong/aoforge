// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'ao-forge',
    description: 'CLI tool to create AO-powered applications',
    image: '/og-image.png',
    socials: {
      github: 'ao-forge/ao-forge',
      discord: 'ao-forge',
      twitter: 'ao_forge'
    },
    github: {
      owner: 'ao-forge',
      repo: 'ao-forge',
      branch: 'main',
      dir: 'docs'
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
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev'
      }
    }
  }
})
