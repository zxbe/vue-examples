/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../../node_modules/vue/dist/vue.esm.browser.js';

import DividerComponent from './DividerComponent.js';
import ErrorBoundaryArea from './ErrorBoundaryArea.js';
import ErrorBoundaryRoot from './ErrorBoundaryRoot.js';

new Vue({
  el: '#app',
  components: { DividerComponent, ErrorBoundaryArea, ErrorBoundaryRoot },
  template: `
    <error-boundary-root>
      <p style="color: gray">See console for side-effect</p>
      <h1>Error Boundaries</h1>
        <error-boundary-area>
          <divider-component />
        </error-boundary-area>
    </error-boundary-root>
  `
});
