/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex, {
  mapState
} from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: 'CreateStore',
    year: 2020
  }
});

const App = {
  name: 'App',
  // Harder to have multiple computed properties, therefor use mapState helper.
  computed: mapState({
    // Function
    name: state => state.name,
    // Alias
    year: 'year'
  }),
  template: `
    <ul>
      <li>Name: {{ name }}</li>
      <li>Year: {{ year }}</li>
    </ul>`
};

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
