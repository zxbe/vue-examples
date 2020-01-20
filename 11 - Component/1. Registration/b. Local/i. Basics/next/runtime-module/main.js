/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../../node_modules/vue-next/dist/vue.esm.js';

import GreetingComponent from './GreetingComponent.js';

// Bootstrap
const app = Vue.createApp();
app.component('greeting-component', GreetingComponent);
app.mount({}, '#app');
