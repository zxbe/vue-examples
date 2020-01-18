/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue/dist/vue.esm.browser.js';

import App from './App.js';

// Bootstrap
new Vue({
  el: '#app',
  components: {
    app: App
  },
  template: '<app />'
});
