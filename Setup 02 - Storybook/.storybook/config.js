import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Greeting from '../site/src/GreetingComponent.vue';

// Register custom components.
Vue.component('greeting', Greeting);

function loadStories() {
  require('../site/src/stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);
