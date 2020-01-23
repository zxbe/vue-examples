import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
//import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

// Import your custom components.
import EditBox from '../components/EditBox.vue';
import Greeting from '../components/Greeting.vue';
import GreetingEditor from '../components/GreetingEditor.vue';

// Register custom components.
Vue.component('EditBox', EditBox);
Vue.component('Greeting', Greeting);
Vue.component('GreetingEditor', GreetingEditor);

storiesOf('EditBox', module).add('with value', () => ({
  components: {
    EditBox
  },
  props: {
    value: 'Test'
  },
  template: '<EditBox @change="() => {}" value="Test" />'
}));
//  .add('with onChange', () => (
//    <EditBox v-on:change={action('editbox-change')} />
//  ));

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

storiesOf('GreetingEditor', module).add(
  'with name',
  () => '<GreetingEditor name="Storybook" />'
);
