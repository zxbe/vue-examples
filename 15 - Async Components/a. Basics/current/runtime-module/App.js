/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  name: 'App',
  components: {
    'greeting-dutch': () => import('./GreetingDutch.js'),
    'greeting-english': () => import('./GreetingEnglish.js'),
    'greeting-spanish': () => import('./GreetingSpanish.js')
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

      <div style="padding: 4px; background: lightgray">
        <component v-bind:is="greetingLanguage"></component>
      </div>
    </div>
  `
};
