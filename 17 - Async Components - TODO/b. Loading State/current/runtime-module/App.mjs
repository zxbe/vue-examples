/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ErrorComponent from './components/Error.mjs';
import LoadingComponent from './components/Loading.mjs';

function createAsyncComponent(module) {
  return () => ({
    component: import(module),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 200,
    timeout: 2000
  });
}

export default {
  name: 'App',
  components: {
    'greeting-dutch': () => ({
      // Load component (using a Promise)
      component: import('./GreetingDutch.mjs'),
      // Show while loading
      loading: LoadingComponent,
      // Show when load fails
      error: ErrorComponent,
      // Delay before showing loading component in ms (default: 200ms)
      delay: 200,
      // Timeout to show error in ms (default: Infinity).
      timeout: 2000
    }),
    'greeting-english': createAsyncComponent('./GreetingEnglish.mjs'),
    'greeting-spanish': createAsyncComponent('./GreetingSpanish.mjs'),
    'greeting-unknown': createAsyncComponent('./does-not-exists')
  },
  data() {
    return {
      language: 'english'
    };
  },
  computed: {
    greetingLanguage() {
      return 'greeting-' + this.language;
    }
  },
  template: `
    <div>
      <div style="color: lightgray">
        <em>Show this example with a Network Latency.</em>
      </div>

      <label>
        <input v-model="language" type="radio" value="dutch" />
        Dutch
      </label>
      <label>
        <input v-model="language" type="radio" value="english" />
        English
      </label>
      <label>
        <input v-model="language" type="radio" value="spanish" />
        Spanish
      </label>
      <label>
        <input v-model="language" type="radio" value="unknown" />
        Unknown
      </label>

      <div style="padding: 4px; background: lightgray">
        <component v-bind:is="greetingLanguage"></component>
      </div>
    </div>
  `
};
