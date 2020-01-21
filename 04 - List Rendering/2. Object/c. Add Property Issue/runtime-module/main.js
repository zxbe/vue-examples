/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

let itemId = 4;

new Vue({
  el: '#app',
  data: {
    object: {
      prop1: true,
      prop2: 'two',
      prop3: 3
    }
  },
  methods: {
    addRight() {
      Vue.set(this.object, `prop ${itemId}`, itemId++);
    },
    addWrong() {
      this.object[itemId] = itemId++;
    }
  }
});
