/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const INCREMENT = 'increment';

const store = new Vuex.Store({
  state: {
    year: 2019
  },
  mutations: {
    [INCREMENT](state, payload) {
      state.year += payload;
    }
  }
});

addToList(store.state);

store.commit(INCREMENT, 5);

addToList(store.state);
