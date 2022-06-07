import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/fonts.css'
Vue.config.productionTip = false

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger);

Vue.use(gsap)

Vue.mixin({
  created: function () {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
