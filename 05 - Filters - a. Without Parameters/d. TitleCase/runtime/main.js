/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  filters: {
    titlecase: function(value) {
      if (!value) {
        return '';
      }

      return value
        .split(' ')
        .map(([first, ...rest]) =>
          [first.toUpperCase(), ...rest.join('').toLowerCase()].join('')
        )
        .join(' ');
    }
  }
});
