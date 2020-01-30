/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../node_modules/vue/dist/vue.esm.browser.js';
import VueRouter from '../../../node_modules/vue-router/dist/vue-router.esm.browser.js';

// f.e. Registers router-link and router-view components.
Vue.use(VueRouter);

const Home = { template: '<h2>Home</h2>' };
const Page1 = {
  template: `
    <div>
      <h2>Page 1</h2>
      
      <nav>
        <ul>
          <li>
            <router-link to="/page1">Subpage 1</router-link>
          </li>
          <li>
            <router-link to="/page1/sub2">Subpage 2</router-link>
          </li>
          <li>
            <router-link to="/page1/sub3">Subpage 3</router-link>
          </li>
        </ul>
      </nav>

      <router-view></router-view>
    </div>
  `
};
const Page2 = { template: '<h2>Page 2</h2>' };

const SubPage1 = { template: '<h3>Subpage 1</h3>' };
const SubPage2 = { template: '<h3>Subpage 2</h3>' };
const SubPage3 = { template: '<h3>Subpage 3</h3>' };

new Vue({
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      {
        path: '/page1',
        component: Page1,
        children: [
          { path: '', component: SubPage1 },
          { path: 'sub2', component: SubPage2 },
          { path: 'sub3', component: SubPage3 }
        ]
      },
      { path: '/page2', component: Page2 }
    ]
  })
}).$mount('#app');
