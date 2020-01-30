/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue/dist/vue.esm.browser.js';

import App from './main/components/App.js';
import store from './main/store/index.js';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
