/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';

import ContainerComponent from './ContainerComponent.js';

// Bootstrap
new Vue({
  el: '#app',
  components: {
    'container-component': ContainerComponent
  },
  data: () => ({
    source: 'Root'
  })
});
