/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

Vue.use(Vuex);

export const CHANGE = 'change';
export const INCREMENT = 'increment';

// Get persistently stored state
const stored = localStorage.getItem('store');
const initialValue = stored
  ? JSON.parse(stored)
  : {
      name: 'Svelte',
      year: 2020
    };

const store = new Vuex.Store({
  state: initialValue,
  mutations: {
    [CHANGE](state, payload) {
      state.name = payload;
    },
    [INCREMENT](state, payload) {
      state.year += payload;
    }
  }
});

// Set persistently stored state
store.subscribe((mutation, state) =>
  localStorage.setItem('store', JSON.stringify(state))
);

export default store;
