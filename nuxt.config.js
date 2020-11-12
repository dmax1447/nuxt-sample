
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'dmax1447 nuxt sample app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'green' },
  /*
  ** Global CSS
  */
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '@/node_modules/element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/index.scss'
    // `swiper/dist/css/swiper.css`
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/swiper.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['nuxt-lazy-load', {
      // directiveOnly: true
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'swiper'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
