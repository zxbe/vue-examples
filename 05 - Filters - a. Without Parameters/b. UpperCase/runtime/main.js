/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  filters: {
    uppercase: function(value) {
      if (!value) {
        return '';
      }

      return value.toUpperCase();
    }
  }
});
