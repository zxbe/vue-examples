/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../../node_modules/vue/dist/vue.esm.browser.js';

import DividerComponent from './DividerComponent.js';
import ErrorBoundary from './ErrorBoundary.js';

new Vue({
  el: '#app',
  components: { DividerComponent, ErrorBoundary },
  template: `
    <div>
      <h1>Error Boundaries</h1>
      <error-boundary>
        <divider-component />
      </error-boundary>
    </div>
  `
});
