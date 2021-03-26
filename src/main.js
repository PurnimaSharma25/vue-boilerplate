import Vue from 'vue';

import App from './App.vue';

//import first from './components/first.vue';

import VueRouter from 'vue-router';

import routes from './router.js';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);

Vue.use(VueRouter);

Vue.config.productionTip = false

const router=new VueRouter({
  routes,
  
});

export const bus = new Vue();

Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
});

new Vue({
  router,
  //render: h => h(first)
  render: h => h(App)
  
}).$mount('#app');



