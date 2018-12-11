import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

//import Greeting from '../GreetingComponent.vue';

/* global module */

storiesOf('Greeting', module)
  .add('without name', () => '<greeting/>')
  .add('with name', () => '<greeting name="Storybook" />');
