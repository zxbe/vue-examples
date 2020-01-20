/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const GreetingComponent = httpVueLoader('./GreetingComponent.vue');

new Vue({
  el: '#app',
  components: {
    'greeting-component': GreetingComponent
  },
  template: `
    <div>
      <greeting-component name="World" />
      <greeting-component :name="123" />
      <greeting-component :name="true" />
    </div>
  `
});
