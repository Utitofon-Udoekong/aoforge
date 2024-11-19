// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'AOForge',
    description: 'The official landing page for create AO app',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'https://github.com/Utitofon-Udoekong/create-ao-app',
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
      edit: false
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
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
