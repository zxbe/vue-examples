import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

// Import your custom components.
import Greeting from '../GreetingComponent.vue';

// Register custom components.
Vue.component('greeting', Greeting);

storiesOf('Greeting', module)
  .add('without name', () => '<greeting/>')
  .add('with name', () => '<greeting name="Storybook" />');
