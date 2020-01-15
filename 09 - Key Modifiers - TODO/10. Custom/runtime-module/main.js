/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

// Global Registration of custom modifier
Vue.config.keyCodes.f1 = 112;

new Vue({
  el: '#app',
  config: {
    // Local Registration of custom modifier
    keyCodes: {
      f2: 113
    }
  },
  data: {
    result: []
  },
  methods: {
    keyup: function(event) {
      this.result.push(
        `key: ${event.key}, code: ${event.code} (ctrlKey: ${event.ctrlKey}, shiftKey  ${event.shiftKey}, altKey: ${event.altKey}, metaKey: ${event.metaKey})`
      );
    }
  }
});
