/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const moduleA = {
  state: {
    name: 'CreateStore'
  },
  mutations: {
    nameToLowerCase(state) {
      state.name = state.name.toLowerCase();
    }
  },
  actions: {
    // Actions are similar to mutations, but actions:
    // - commit mutations (don't mutate directly)
    // - can contain arbitrary asynchronous operations.
    nameToLowerCase(context) {
      context.commit('nameToLowerCase');
    }
  }
};

const CHANGE_NAME = 'CHANGE_NAME';

const moduleB = {
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
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});

addToList(store.state);

store.dispatch('nameToLowerCase');

addToList(store.state);

store.dispatch('CHANGE_NAME', {
  name: 'ChangedName' /* potentially more values */
});

addToList(store.state);
