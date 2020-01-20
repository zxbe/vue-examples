<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <label>Dutch: <input v-model="greeting"/></label>
    <p>Hallo {{ greeting }}</p>
  </div>
</template>

<script>
module.exports = {
  name: 'GreetingDutch',
  data() {
    return {
      greeting: 'Wereld'
    };
  }
};
</script>

<style scoped></style>
