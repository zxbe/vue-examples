/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue-next/dist/vue.esm.js';

(async () => {
  /* global httpVueLoader */
  const GreetingComponent = await httpVueLoader('./GreetingComponent.vue')();

  // Bootstrap
  const app = Vue.createApp();
  app.component('greeting-component', GreetingComponent);
  app.mount({}, '#app');
})();
