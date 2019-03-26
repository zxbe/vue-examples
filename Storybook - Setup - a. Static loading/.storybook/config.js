import { configure } from '@storybook/vue';

function loadStories() {
  require('../site/src/stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);
