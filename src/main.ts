import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import vuetify from '@/plugins/vuetify'

import App from './App.vue'
import router from './router'

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  vuetify,
  pinia: createPinia(),
  render: h => h(App)
}).$mount('#app')
