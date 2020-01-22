/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const Greeting = httpVueLoader('./Greeting.vue');
const GreetingFC = httpVueLoader('./GreetingFC.vue');

// Bootstrap
new Vue({
  el: '#app',
  // Register component locally
  components: {
    greeting: Greeting,
    greetingfc: GreetingFC
  },
  template: `
    <div>
      <greeting />
      <greetingfc />
    </div>
  `
});
