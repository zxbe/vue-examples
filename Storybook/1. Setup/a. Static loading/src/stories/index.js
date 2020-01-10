import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

// Import your custom components.
import Greeting from '../components/Greeting.vue';

// Register custom components.
Vue.component('Greeting', Greeting);

storiesOf('Greeting', module)
  .add('without name', () => '<Greeting/>')
  .add('with name', () => '<Greeting name="Storybook" />');
