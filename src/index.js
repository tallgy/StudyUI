import Vue from 'vue'
import App from './App.vue'

import SButton from './../packages/button/index'

Vue.config.productionTip = false

Vue.use(SButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
