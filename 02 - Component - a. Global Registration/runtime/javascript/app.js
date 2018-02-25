/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global Vue */

// Register component
Vue.component('greeting', {
  template: '<h1>Hello World!</h1>'
})

// Bootstrap
new Vue({
  el: '#app'
});
