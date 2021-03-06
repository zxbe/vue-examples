/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import GreetingDutch from './GreetingDutch.js';
import GreetingEnglish from './GreetingEnglish.js';
import GreetingSpanish from './GreetingSpanish.js';

export default {
  name: 'App',
  components: {
    'greeting-dutch': GreetingDutch,
    'greeting-english': GreetingEnglish,
    'greeting-spanish': GreetingSpanish
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
        <!-- Cache inactive components -->
        <keep-alive>
          <component :is="greetingLanguage"></component>
        </keep-alive>
      </div>
    </div>
  `
};
