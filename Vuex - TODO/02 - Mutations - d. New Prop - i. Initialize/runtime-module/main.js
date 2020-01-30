/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.browser.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const SET_NEW_PROP = 'SET_NEW_PROP';

const store = new Vuex.Store({
  state: {
    obj: {
      newProp: null // Initialize for Reactivity
    }
  },
  mutations: {
    [SET_NEW_PROP](state, payload) {
      state.obj.newProp = payload;
    }
  }
});

addToList(store.state);

store.commit(SET_NEW_PROP, 123);

addToList(store.state);
