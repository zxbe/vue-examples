/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    options: [
      { description: 'Option A', value: 'A' },
      { description: 'Option B', value: 'B' },
      { description: 'Option C', value: 'C' }
    ],
    selected: 'B'
  }
});
