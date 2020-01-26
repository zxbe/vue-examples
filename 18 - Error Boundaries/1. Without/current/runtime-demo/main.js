/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const DividerComponent = httpVueLoader('./DividerComponent.vue');

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
