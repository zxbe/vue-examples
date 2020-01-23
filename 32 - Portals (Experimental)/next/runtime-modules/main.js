/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  createApp,
  Portal
} from '../../../../node_modules/vue-next/dist/vue.esm.js';

createApp().mount(
  {
    components: {
      Portal
    },
    template: `
      This is the Vue app.
      <portal target="#portal">
        I am shown outside the Vue root element.
      </portal>
    `
  },
  '#app'
);
