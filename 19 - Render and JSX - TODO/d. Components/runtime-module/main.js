/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

const Greeting = {
  name: 'Greeting',
  props: ['name'],
  template: `<h1>Hello {{ name }}!</h1>`
};

new Vue({
  el: '#app',
  render: function(createElement) {
    return createElement(
      Greeting, // tag name
      {
        props: {
          name: 'World'
        }
      } // object with (f.e.) attributes
      // [Optional] array of children
    );
  }
});
