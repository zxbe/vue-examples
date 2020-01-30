/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    year: 2020
  },
  mutations: {
    increment(state) {
      state.year++;
    }
  },
  actions: {
    // Actions are similar to mutations, but actions:
    // - commit mutations (don't mutate directly)
    // - can contain arbitrary asynchronous operations.
    increment(context) {
      context.commit('increment');
    }
  }
});

addToList(store.state);

// Actions are dispatched to the store.
store.dispatch('increment');

addToList(store.state);
