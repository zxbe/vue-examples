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
export default {
  name: 'App',
  components: {
    'greeting-dutch': () => import('./components/GreetingDutch.js'),
    'greeting-english': () => import('./components/GreetingEnglish.js'),
    'greeting-spanish': () => import('./components/GreetingSpanish.js')
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
