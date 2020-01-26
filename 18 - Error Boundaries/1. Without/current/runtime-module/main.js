/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../../node_modules/vue/dist/vue.esm.browser.js';

import DividerComponent from './DividerComponent.js';

new Vue({
  el: '#app',
  components: { DividerComponent },
  template: `
    <div>
      <h1>Without Error Boundary</h1>
      <divider-component />
    </div>
  `
});
