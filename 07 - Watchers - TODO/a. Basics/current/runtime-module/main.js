/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    count: 0,
    change: ''
  },
  watch: {
    count(newValue, oldValue) {
      this.change = `Changed from ${oldValue} to ${newValue}`;
    }
  }
});
