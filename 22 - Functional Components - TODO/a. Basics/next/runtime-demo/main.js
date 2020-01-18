/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue-next/dist/vue.esm.js';

(async () => {
  /* global httpVueLoader */
  const Greeting = await httpVueLoader('./Greeting.vue')();
  const GreetingFC = await httpVueLoader('./GreetingFC.vue')();

  // Bootstrap
  const app = Vue.createApp();
  app.component('greeting', Greeting);
  app.component('greetingFC', GreetingFC);
  app.mount(
    {
      template: `
        <greeting />
        <greetingFC />
      `
    },
    '#app'
  );
})();
