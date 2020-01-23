/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';
import VueRouter from '../../../../node_modules/vue-router/dist/vue-router.esm.js';

// f.e. Registers router-link and router-view components.
Vue.use(VueRouter);

const Home = { template: '<h2>Home</h2>' };
const Page1 = {
  props: ['a', 'b'],
  template: `
    <div>
      <h2>Page 1</h2>
      a = {{ a }}
      <br />
      b = {{ b }}
    </div>`
};
const Page2 = {
  props: ['a', 'b'],
  template: '<h2>Page 2 (a={{a}}, b={{b}})</h2>'
};

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page1', component: Page1, props: { a: 1, b: 2 } },
      { path: '/page2', component: Page2, props: { a: 3, b: 4 } }
    ]
  })
}).$mount('#app');
