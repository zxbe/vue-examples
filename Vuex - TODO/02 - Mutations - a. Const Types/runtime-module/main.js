/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.js';

import { addToList } from './helpers.js';

// Always call this first.
Vue.use(Vuex);

const NAME_TO_LOWER_CASE = 'NAME_TO_LOWER_CASE';

const store = new Vuex.Store({
  state: {
    name: 'CreateStore'
  },
  mutations: {
    [NAME_TO_LOWER_CASE](state) {
      state.name = state.name.toLowerCase();
    }
  }
});

addToList(store.state);

store.commit(NAME_TO_LOWER_CASE);

addToList(store.state);
