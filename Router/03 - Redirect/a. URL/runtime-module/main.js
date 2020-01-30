/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';
import VueRouter from '../../../../node_modules/vue-router/dist/vue-router.esm.browser.js';

Vue.use(VueRouter);

const Home = { template: '<h2>Home</h2>' };
const Page1 = { template: '<h2>Page 1</h2>' };
const Page2 = {
  template: `
    <div>
      <h2>Page 2</h2>
      <ul>
        <li>$route.name: {{ $route.name }}</li>
        <li>$route.redirectedFrom: {{ $route.redirectedFrom }}</li>
      </ul>
    </div>
  `
};

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page1', component: Page1 },
      { path: '/page2', component: Page2 },
      { path: '/oldpage2', redirect: '/page2' }
    ]
  })
}).$mount('#app');
