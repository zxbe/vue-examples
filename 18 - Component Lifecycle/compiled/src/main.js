/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from 'vue';

import App from './App.vue';

const vm = new Vue({
  render: h => h(App)
});
const component = vm.$mount();
const elem = document.body.appendChild(component.$el);

setTimeout(function() {
  vm.$destroy();
  document.body.removeChild(elem);
}, 200);
