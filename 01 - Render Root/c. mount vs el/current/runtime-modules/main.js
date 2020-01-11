/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Vue from '../../../../node_modules/vue/dist/vue.esm.browser.js';

// 1. Added as a new child

const vue1 = new Vue({
  template: `<li value="9">Hello Vue ${Vue.version}!</li>`
}).$mount();
document.querySelector('#app1').parentElement.appendChild(vue1.$el);

// 2. Replaces child passed in $mount()

const vue2 = new Vue({
  template: `<li value="9">Hello Vue ${Vue.version}!</li>`
}).$mount('#app2a');
document.querySelector('#app2b').parentElement.appendChild(vue2.$el);

// 3. Replaces child passed as el property

const vue3 = new Vue({
  el: '#app3a',
  template: `<li value="9">Hello Vue ${Vue.version}!</li>`
}).$mount('#app3b');
document.querySelector('#app3c').parentElement.appendChild(vue3.$el);
