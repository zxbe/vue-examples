/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const DividerComponent = httpVueLoader('./DividerComponent.vue');
const ErrorBoundaryArea = httpVueLoader('./ErrorBoundaryArea.vue');
const ErrorBoundaryRoot = httpVueLoader('./ErrorBoundaryRoot.vue');

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
