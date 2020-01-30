/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import VueRouter from '../../../node_modules/vue-router/dist/vue-router.esm.browser.js';

import Home from './Home.js';
const Page1 = () => import('./Page1.js');
const Page2 = () => import('./Page2.js');

Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page1', component: Page1 },
      { path: '/page2', component: Page2 }
    ]
  })
}).$mount('#app');
