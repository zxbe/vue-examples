<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <greeting :name="greetingText" @change="greetingChanged($event)"></greeting>
    <h1>Hello {{ greetingText }}</h1>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */
/* global httpVueLoader */

const Greeting = httpVueLoader('./Greeting.vue');

// @vue/component
module.exports = {
  name: 'App',
  components: {
    greeting: Greeting
  },
  data: function() {
    return {
      greetingText: 'World'
    };
  },
  methods: {
    greetingChanged: function(value) {
      this.greetingText = value;
    }
  }
};
</script>

<style scoped></style>
