/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue-next/dist/vue.esm.js';

(async () => {
  /* global httpVueLoader */
  const App = await httpVueLoader('./App.vue')();

  // Bootstrap
  const app = Vue.createApp();
  app.mount(App, '#app');
})();
