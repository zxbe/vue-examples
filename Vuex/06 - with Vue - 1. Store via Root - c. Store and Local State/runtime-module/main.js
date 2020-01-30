/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex, {
  mapState
} from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: 'CreateStore'
  }
});

const App = {
  name: 'App',
  data() {
    return {
      year: 2020
    };
  },
  computed: {
    // Copy all from store
    ...mapState({ name: state => state.name }),
    // Local computed property
    previousYear() {
      return this.year - 1;
    }
  },
  template: `
    <ul>
      <li>[Store] Name: {{ name }}</li>
      <li>[Local] Year: {{ year }}</li>
      <li>[Local] Previous year: {{ previousYear }}</li>
    </ul>`
};

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
