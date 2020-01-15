/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vue from 'vue';

import App from './App.vue';

// Dynamically create root element
const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'app');
document.body.appendChild(rootElement);

// Bootstrap
Vue.createApp().mount(App, rootElement);
