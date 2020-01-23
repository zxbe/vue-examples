import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

// Import your custom component.
import Greeting from './Greeting.vue';

// Register custom component.
Vue.component('Greeting', Greeting);

storiesOf('Greeting', module)
  .add('without name', () => '<Greeting/>')
  .add('with name', () => '<Greeting name="Storybook" />');
