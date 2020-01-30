/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';

const vm = new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!'
  }
});

vm.greeting += ' Hi Vue!';
