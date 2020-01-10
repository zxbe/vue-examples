/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const App = httpVueLoader('./App.vue');

new Vue({
  render: h => h(App)
}).$mount('#app');
