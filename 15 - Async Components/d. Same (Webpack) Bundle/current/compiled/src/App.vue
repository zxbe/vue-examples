<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
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

    <div id="result">
      <component :is="greetingLanguage"></component>
    </div>
  </div>
</template>

<script>
import GreetingEnglish from './components/GreetingEnglish.vue';

export default {
  name: 'App',
  components: {
    'greeting-english': GreetingEnglish,
    // The non-default components are placed in the same bundle.
    // Build app and observe the created packages
    // or Run and observe the devtools' network tab.
    'greeting-dutch': () =>
      import(
        /* webpackChunkName: "greeting-group" */ './components/GreetingDutch.vue'
      ),
    'greeting-spanish': () =>
      import(
        /* webpackChunkName: "greeting-group" */ './components/GreetingSpanish.vue'
      )
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
  }
};
</script>

<style>
#result {
  padding: 4px;
  background: lightgray;
}
</style>
