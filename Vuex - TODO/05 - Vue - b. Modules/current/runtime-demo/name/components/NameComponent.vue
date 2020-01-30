<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <label>
      Name:
      <input v-model="name" />
    </label>
    <p>Hello {{ name }}!</p>
  </div>
</template>

<script>
module.exports = {
  name: 'NameComponent',
  computed: {
    name: {
      get() {
        return this.$store.state.name.name;
      },
      set(value) {
        this.$store.dispatch('name/change', { name: value });
      }
    }
  }
};
</script>
