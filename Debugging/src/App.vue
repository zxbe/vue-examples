<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div id="app">
    <GreetingEditor value="Vue" />
  </div>
</template>

<script>
import GreetingEditor from './components/GreetingEditor.vue';

export default {
  name: 'App',
  components: {
    GreetingEditor
  }
}
</script>

<style>
#app {
  color: #444;
}
</style>
