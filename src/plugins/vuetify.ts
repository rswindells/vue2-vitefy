import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
Vue.use(Vuetify)

export default new Vuetify({
  // iconfont: 'mdi',
  // icons: {
  //   iconfont: 'mdi'
  // },
  theme: {
    themes: {
      dark: {
        primary: '#FFBC42',
        secondary: '#D81159',
        accent: '#006BA6'
      }
    },
    dark: true
  }
})
