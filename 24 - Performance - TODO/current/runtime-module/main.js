/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue/dist/vue.esm.browser.js';

import GreetingComponent from './GreetingComponent.js';

// Enable component init, compile, render and patch performance tracing.
Vue.config.performance = true;

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    'greeting-component': GreetingComponent
  }
});
