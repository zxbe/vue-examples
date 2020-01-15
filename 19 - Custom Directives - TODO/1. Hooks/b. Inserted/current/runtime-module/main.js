/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue/dist/vue.esm.browser.js';

Vue.directive('focus', {
  inserted(elem) {
    elem.focus();
  }
});

new Vue({
  el: '#app'
});
