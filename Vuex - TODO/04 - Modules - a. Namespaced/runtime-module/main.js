/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.js';

import { addToList } from './helpers.js';

Vue.use(Vuex);

const CHANGE = 'CHANGE';

const moduleA = {
  // Namespaced: To prevent name collision
  namespaced: true,
  state: {
    value: 0
  },
  mutations: {
    [CHANGE](state, value) {
      state.value = value;
    }
  },
  actions: {
    [CHANGE]({ commit }, payload) {
      commit(CHANGE, payload);
    }
  }
};

const moduleB = {
  // Namespaced: To prevent name collision
  namespaced: true,
  state: {
    name: 'CreateStore'
  },
  mutations: {
    [CHANGE](state, value) {
      state.name = value;
    }
  },
  actions: {
    [CHANGE]({ commit }, payload) {
      commit(CHANGE, payload.name);
    }
  }
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});

addToList(store.state);

// Namespaced action name.
store.dispatch('a/CHANGE', 2020);

addToList(store.state);

// Namespaced action name.
store.dispatch('b/CHANGE', {
  name: 'ChangedName'
});

addToList(store.state);
