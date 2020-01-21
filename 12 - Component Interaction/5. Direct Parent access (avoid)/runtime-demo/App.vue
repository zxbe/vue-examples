<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <child :name="greetingText"></child>
    <h1>Hello {{ greetingText }}</h1>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */
/* global httpVueLoader */

const Child = httpVueLoader('./Child.vue');

module.exports = {
  name: 'App',
  components: {
    child: Child
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
