/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../../node_modules/vue/dist/vue.esm.browser.js';

import Top from './components/Top.js';

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    Top
  }
});
