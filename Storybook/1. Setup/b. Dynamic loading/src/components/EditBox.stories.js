import Vue from 'vue';
//import { storiesOf } from '@storybook/vue';
//import { action } from '@storybook/addon-actions';

// Import your custom component.
import EditBox from './EditBox.vue';

// Register custom component.
Vue.component('EditBox', EditBox);

//storiesOf('EditBox', module)
//  .add('with value', () => <EditBox v-on:change="() => {}" value="Test" />)
//  .add('with onChange', () => (
//    <EditBox v-on:change={action('editbox-change')} />
//  ));
