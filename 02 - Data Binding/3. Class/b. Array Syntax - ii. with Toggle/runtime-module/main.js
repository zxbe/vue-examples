/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    isDynamic1: false,
    isDynamic2: true
  },
  methods: {
    clicked() {
      this.isDynamic1 = !this.isDynamic1;
      this.isDynamic2 = !this.isDynamic2;
    }
  }
});
