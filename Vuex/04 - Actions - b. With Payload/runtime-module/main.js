/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const INCREMENT = 'increment';

const store = new Vuex.Store({
  state: {
    year: 2020
  },
  mutations: {
    [INCREMENT](state, payload) {
      state.year += payload.value;
    }
  },
  actions: {
    [INCREMENT]({ commit }, payload) {
      commit(INCREMENT, payload);
    }
  }
});

addToList(store.state);

store.dispatch(INCREMENT, {
  value: 5 /* potentially more values */
});

addToList(store.state);
