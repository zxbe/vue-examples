/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

/* global httpVueLoader */
const App = httpVueLoader('./App.vue');

new Vue({
  render: h => h(App)
}).$mount('#app');
