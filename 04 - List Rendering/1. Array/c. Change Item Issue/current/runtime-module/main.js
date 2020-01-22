/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue/dist/vue.esm.browser.js';

let itemId = 4;

new Vue({
  el: '#app',
  data: {
    items: ['one', 'two', 'three']
  },
  methods: {
    overwrite1() {
      this.$set(this.items, 0, itemId++);
    },
    overwrite2() {
      this.items.splice(0, 1, itemId++);
    },
    overwrite3() {
      const [, ...rest] = this.items;
      this.items = [itemId++, ...rest];
    },
    overwrite4() {
      this.items[0] = itemId++;

      // WRONG (performance)
      //this.$forceUpdate();
    }
  }
});
