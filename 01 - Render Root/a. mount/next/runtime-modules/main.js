/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../node_modules/vue-next/dist/vue.esm.js';

Vue.createApp().mount(
  {
    template: `Hello Vue ${Vue.version}!` // No <div> needed.
  },
  '#app1' // <div id="app1"></div>
);

Vue.createApp().mount(
  {
    data: {
      greeting: `Hi Vue ${Vue.version}!`
    }
  },
  '#app2' // <div id="app2">{{ greeting }}</div>
);
