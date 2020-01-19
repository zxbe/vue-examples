/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    dynamicevent: 'click'
  },
  methods: {
    clicked(e) {
      alert(`Event handled.
      Target: ${e.target}`);
    }
  }
});
