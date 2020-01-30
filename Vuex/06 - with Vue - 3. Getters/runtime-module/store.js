/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { id: 0, sex: 'female', country: 'NL', name: 'Alexandra' },
      { id: 1, sex: 'male', country: 'EN', name: 'Benjamin' },
      { id: 2, sex: 'female', country: 'EN', name: 'Charlotte' },
      { id: 3, sex: 'male', country: 'NL', name: 'Dirk' }
    ]
  },
  getters: {
    females: state => {
      return state.items.filter(item => item.sex === 'female');
    },
    dutch: state => {
      return state.items.filter(item => item.country === 'NL');
    }
  }
});
