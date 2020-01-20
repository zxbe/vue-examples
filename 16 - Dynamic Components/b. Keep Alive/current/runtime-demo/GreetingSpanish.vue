<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <label>Spanish: <input v-model="greeting"/></label>
    <p>Hola {{ greeting }}</p>
  </div>
</template>

<script>
module.exports = {
  name: 'GreetingSpanish',
  data() {
    return {
      greeting: 'Mundo'
    };
  }
};
</script>

<style scoped></style>
