/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const CHANGE = 'change';

const store = new Vuex.Store({
  state: {
    name: 'Initial',
    year: 2019
  },
  mutations: {
    [CHANGE](state, payload) {
      state.name = payload.name;
      state.year = payload.year;
    }
  }
});

addToList(store.state);

// Pass an object instead of 2 values to commit:
store.commit({
  type: CHANGE,
  name: 'Update',
  year: 2020
});

addToList(store.state);
