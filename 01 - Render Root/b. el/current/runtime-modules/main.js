/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  el: '#app1',
  template: `<div>Hello Vue ${Vue.version}!</div>`
});

new Vue({
  el: '#app2',
  data: {
    greeting: `Hello Vue ${Vue.version}!`
  }
});
