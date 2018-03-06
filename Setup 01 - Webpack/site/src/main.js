/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import Vue from 'vue';

import GreetingComponent from './GreetingComponent.vue';

const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

new Vue({
  render: h => h(GreetingComponent)
}).$mount('#app')
