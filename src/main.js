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
  el: '#app',
  template: '<App/>',
  components: { App }
})