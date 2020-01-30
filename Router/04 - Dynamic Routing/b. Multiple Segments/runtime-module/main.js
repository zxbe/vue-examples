/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';
import VueRouter from '../../../../node_modules/vue-router/dist/vue-router.esm.browser.js';

Vue.use(VueRouter);

const Home = { template: '<h2>Home</h2>' };

const Page = {
  template: `
    <div>
      <h2>Page {{ $route.params.id }}{{ $route.params.sub}}</h2>
      <ul>
        <li>$route.fullPath: {{ $route.fullPath }}</li>
        <li>$route.path: {{ $route.path }}</li>
        <li>$route.params: {{ JSON.stringify($route.params) }}</li>
        <li>$route.query: {{ JSON.stringify($route.query) }}</li>
        <li>$route.name: {{ $route.name }}</li>
        <li>$route.redirectedFrom: {{ $route.redirectedFrom }}</li>
      </ul>
    </div>`
};

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page/:id/:sub', component: Page }
    ]
  })
}).$mount('#app');
