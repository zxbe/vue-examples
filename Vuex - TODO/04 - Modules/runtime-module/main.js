/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

Vue.use(Vuex);

const INCREASE = 'INCREASE';

const moduleA = {
  state: {
    value: 0
  },
  mutations: {
    [INCREASE](state) {
      state.value++;
    }
  },
  actions: {
    [INCREASE](context) {
      context.commit(INCREASE);
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

// Be aware for name collision between actions from different modules
store.dispatch('INCREASE');

addToList(store.state);

// Be aware for name collision between actions from different modules
store.dispatch('CHANGE_NAME', {
  name: 'ChangedName'
});

addToList(store.state);
