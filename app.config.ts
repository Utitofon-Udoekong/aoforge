// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'AOForge',
    description: 'The official landing page for create AO app',
    image: '/aoforge-banner.png',
    socials: {
      github: 'https://github.com/Utitofon-Udoekong/create-ao-app',
      twitter: '@ao_forge',
      npm: {
        label: 'NPM',
        icon: 'devicon:npm',
        rel: 'noopener',
        href: 'https://www.npmjs.com/package/create-ao-app'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'master',
      repo: 'create-ao-app',
      owner: 'Utitofon-Udoekong',
      edit: false,
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
