import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { text } from '@storybook/addon-knobs';

// Import your custom component.
import Greeting from './Greeting.vue';

// Register custom component.
Vue.component('Greeting', Greeting);

storiesOf('Greeting', module)
  .add('without name', () => '<Greeting/>', {
    notes:
      'Component won\'t show "Hello !" when there is no name, but instead doesn\'t show anything at all.'
  })
  .add('with name', () => '<Greeting name="Storybook" />')
  .add('knobs', () => ({
    components: {
      Greeting
    },
    props: {
      name: {
        default: text('Name', 'Storybook')
      }
    },
    template: '<Greeting :name="name" />'
  }));
