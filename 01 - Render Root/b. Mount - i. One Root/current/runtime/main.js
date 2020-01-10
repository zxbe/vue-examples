/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

new Vue({
  data: {
    greeting: `Hello Vue ${Vue.version}!`
  },
  template: '<div>{{ greeting }}</div>'
}).$mount('#app');
