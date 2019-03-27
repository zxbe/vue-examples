import { configure } from '@storybook/vue';

const req = require.context('../site/src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
