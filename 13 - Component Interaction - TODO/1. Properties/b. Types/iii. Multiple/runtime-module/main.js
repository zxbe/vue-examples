/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../../node_modules/vue/dist/vue.esm.browser.js';

import GreetingComponent from './GreetingComponent.js';

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
