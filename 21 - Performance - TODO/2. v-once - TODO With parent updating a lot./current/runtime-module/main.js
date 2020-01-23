/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

import GreetingComponent from './GreetingComponent.js';

// Enable component init, compile, render and patch performance tracing.
Vue.config.performance = true;

// Bootstrap
new Vue({
  el: '#app',
  name: 'App',
  components: {
    'greeting-component': GreetingComponent
  },
  data: {
    count: 0
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 50);
  }
});
