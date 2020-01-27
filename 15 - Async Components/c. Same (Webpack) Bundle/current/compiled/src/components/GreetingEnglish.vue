<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <label>English: <input v-model="greeting"/></label>
    <p>Hello {{ greeting }}</p>
  </div>
</template>

<script>
export default {
  name: 'GreetingEnglish',
  data() {
    return {
      greeting: 'World'
    };
  }
};
</script>

<style scoped></style>
