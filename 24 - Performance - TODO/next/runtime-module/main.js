/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from '../../../../../node_modules/vue-next/dist/vue.esm.js';

import GreetingComponent from './GreetingComponent.js';

// Bootstrap
const app = Vue.createApp();

// Enable component init, compile, render and patch performance tracing.
app.config.performance = true;

app.component('greeting-component', GreetingComponent);
app.mount({}, '#app');
