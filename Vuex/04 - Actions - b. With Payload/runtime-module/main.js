/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const CHANGE_NAME = 'CHANGE_NAME';

const store = new Vuex.Store({
  state: {
    name: 'CreateStore'
  },
  mutations: {
    [CHANGE_NAME](state, payload) {
      state.name = payload.name;
    }
  },
  actions: {
    [CHANGE_NAME]({ commit }, payload) {
      commit(CHANGE_NAME, payload);
    }
  }
});

addToList(store.state);

store.dispatch('CHANGE_NAME', {
  name: 'ChangedName' /* potentially more values */
});

addToList(store.state);
