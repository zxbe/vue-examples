/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  render: function(createElement) {
    return createElement(
      'a', // tag name
      {
        attrs: {
          href: 'https://vuejs.org',
          target: '_blank'
        }
      }, // object with (f.e.) attributes
      ['Vue website'] // array of children
    );
  }
});
