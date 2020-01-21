<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <input :value="name" @keyup="changed" />
</template>

<script>
/* eslint vue/require-prop-types: "off" */

module.exports = {
  name: 'Child',
  props: ['name'],
  methods: {
    changed(e) {
      this.$emit('change', e.target.value);
    }
  }
};
</script>

<style scoped></style>
