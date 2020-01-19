/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);

const component = new Vue({
  render: h => h(App)
}).$mount();

document.body.appendChild(component.$el);
