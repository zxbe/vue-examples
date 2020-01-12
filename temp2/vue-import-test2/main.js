/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from 'https://unpkg.com/vue/dist/vue.esm.browser.js';

import vueLoader from './vue-loader.js';

const App = vueLoader('./App.vue');

new Vue({
  render: h => h(App)
}).$mount('#app');
