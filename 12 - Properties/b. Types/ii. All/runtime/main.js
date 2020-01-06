/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

import MyComponent from './MyComponent.js';

// Bootstrap
new Vue({
  el: '#app',
  components: {
    'my-component': MyComponent
  }
});
