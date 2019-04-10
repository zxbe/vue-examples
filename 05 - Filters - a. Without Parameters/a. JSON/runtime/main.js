/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    person: {
      name: 'Jan Jansen',
      dob: new Date(1951, 11, 24),
      retired: true,
      children: 3
    }
  },
  filters: {
    json: function(value) {
      return JSON.stringify(value);
    }
  }
});
