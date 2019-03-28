<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div id="app">
    <Greeting name="Vue" />
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue'

export default {
  name: 'App',
  components: {
    Greeting
  }
}
</script>

<style>
#app {
  color: #444;
}
</style>
