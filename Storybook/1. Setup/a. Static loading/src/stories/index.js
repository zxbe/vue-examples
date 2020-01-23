import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

// Import your custom components.
import Greeting from '../components/Greeting.vue';
import GreetingEditor from '../components/GreetingEditor.vue';

// Register custom components.
Vue.component('Greeting', Greeting);
Vue.component('GreetingEditor', GreetingEditor);

storiesOf('Greeting', module)
  .add('without name', () => '<Greeting/>')
  .add('with name', () => '<Greeting name="Storybook" />');

storiesOf('GreetingEditor', module).add(
  'with name',
  () => '<GreetingEditor name="Storybook" />'
);
