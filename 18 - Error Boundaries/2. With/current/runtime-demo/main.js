/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const DividerComponent = httpVueLoader('./DividerComponent.vue');
const ErrorBoundary = httpVueLoader('./ErrorBoundary.vue');

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
