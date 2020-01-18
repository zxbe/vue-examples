<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="app">
    <Greeting />
    <GreetingFC />
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import GreetingFC from './components/GreetingFC.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    GreetingFC
  }
};
</script>

<style></style>
