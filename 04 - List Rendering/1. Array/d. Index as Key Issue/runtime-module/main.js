/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

let itemId = 4;

new Vue({
  el: '#app',
  data: {
    items: ['one', 'two', 'three']
  },
  methods: {
    insertTop() {
      this.items.splice(0, 0, itemId++);
    }
  }
});
