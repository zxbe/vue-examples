/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    count1: 0,
    count2: 0
  },
  computed: {
    computedCount1: function() {
      return Date.now() + this.count1 - this.count1;
    }
  },
  methods: {
    methodCount1: function() {
      return Date.now() + this.count1 - this.count1;
    }
  }
});
