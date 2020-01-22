/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app',
  template: '<h1>Template</h1>',
  render: function(createElement) {
    return createElement(
      'h1', // tag name
      ['Render()'] // array of children
    );
  }
});
