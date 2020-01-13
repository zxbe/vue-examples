/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import Vuex from '../../../node_modules/vuex/dist/vuex.esm.js';

// Always call this first.
Vue.use(Vuex);

const store = new Vuex.Store();

document.getElementById('content').innerText = JSON.stringify(store.state);
