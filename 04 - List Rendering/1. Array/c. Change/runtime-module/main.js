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
    overwriteRight() {
      Vue.set(this.items, 0, itemId++);
    },
    overwriteWrong() {
      this.items[0] = itemId++;
    }
  }
});
