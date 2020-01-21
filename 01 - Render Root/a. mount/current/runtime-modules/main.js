/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  template: `<div>Hello Vue ${Vue.version}!</div>`
}).$mount('#app1'); // <div id="app1"></div>

new Vue({
  data: {
    greeting: `Hi Vue ${Vue.version}!`
  }
}).$mount('#app2'); // <div id="app2">{{ greeting }}</div>
