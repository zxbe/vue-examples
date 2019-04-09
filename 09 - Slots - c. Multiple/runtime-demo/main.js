/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global httpVueLoader, Vue */

const ContainerComponent = httpVueLoader('./ContainerComponent.vue');

// Bootstrap
new Vue({
  el: '#app',
  components: {
    'container-component': ContainerComponent
  }
});
