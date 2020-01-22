<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <button @click="buttonClicked()">Click</button>
</template>

<script>
module.exports = {
  name: 'Child',
  methods: {
    buttonClicked() {
      this.$emit('updated');
    }
  }
};
</script>

<style scoped></style>
