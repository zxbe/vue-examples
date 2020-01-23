import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

// Import your custom component.
import GreetingEditor from './GreetingEditor.vue';

// Register custom component.
Vue.component('GreetingEditor', GreetingEditor);

storiesOf('GreetingEditor', module).add(
  'with name',
  () => '<GreetingEditor name="Storybook" />'
);
