/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

Vue.use(Vuex);

const store = new Vuex.Store();

const App = {
  name: 'App',
  computed: {
    state() {
      // Use global const. Not recommended!
      return store.state;
    }
  },
  template: '<h1>State: {{ state }}</h1>'
};

new Vue({
  el: '#app',
  render: h => h(App)
});
