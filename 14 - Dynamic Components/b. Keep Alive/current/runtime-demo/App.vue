<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

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
      <!-- Cache inactive components -->
      <keep-alive>
        <component :is="greetingLanguage"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
/* global httpVueLoader */
const GreetingDutch = httpVueLoader('./GreetingDutch.vue');
const GreetingEnglish = httpVueLoader('./GreetingEnglish.vue');
const GreetingSpanish = httpVueLoader('./GreetingSpanish.vue');

module.exports = {
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
  }
};
</script>

<style scoped>
#result {
  padding: 4px;
  background: lightgray;
}
</style>
