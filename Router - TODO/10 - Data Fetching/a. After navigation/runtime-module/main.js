/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';
import VueRouter from '../../../../node_modules/vue-router/dist/vue-router.esm.js';

import Home from './Home.js';
import Page from './Page.js';

Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page/:id', component: Page }
    ]
  })
}).$mount('#app');
