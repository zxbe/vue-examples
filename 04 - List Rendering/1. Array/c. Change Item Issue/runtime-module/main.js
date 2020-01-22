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
    overwriteRight1() {
      this.$set(this.items, 0, itemId++);
    },
    overwriteRight2() {
      this.items.splice(0, 1, itemId++);
    },
    overwriteRight3() {
      const [, ...rest] = this.items;
      this.items = [itemId++, ...rest];
    },
    overwriteWrong() {
      this.items[0] = itemId++;

      // WRONG (performance)
      //this.$forceUpdate();
    }
  }
});
