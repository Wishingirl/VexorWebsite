//Imports
import Vue from 'vue'
import App from './App.vue'
import FishUI from 'fish-ui'
import VueFire from 'vuefire';
//Config
Vue.config.productionTip = false
//Middlewares
Vue.use(VueFire);
Vue.use(FishUI)

//Starting Vue
new Vue({
  render: h => h(App),
}).$mount('#app')
