/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    moment: new Date()
  },
  filters: {
    date: function(value, locales) {
      if (!value) {
        return '';
      }

      return value.toLocaleDateString(locales);
    }
  }
});
