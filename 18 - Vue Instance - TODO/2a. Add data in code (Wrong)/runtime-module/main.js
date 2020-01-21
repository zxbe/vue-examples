/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';

const vm = new Vue({
  el: '#app',
  data: {
    first: 'One'
    // Uncomment next line to make the second property reactive:
    // second: undefined
  }
});

// Vue does not allow dynamically adding new root-level reactive properties
vm.second = 'Two';
