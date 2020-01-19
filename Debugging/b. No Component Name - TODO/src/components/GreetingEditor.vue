<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div>
    <EditBox :value="name" @change="changed" />
    <Greeting :name="name" />
  </div>
</template>

<script>
import EditBox from './EditBox.vue';
import Greeting from './Greeting.vue';

export default {
  components: {
    EditBox,
    Greeting
  },
  data: () => ({
    name: 'World'
  }),
  methods: {
    changed: function(value) {
      this.name = value;
    }
  }
};
</script>

<style scoped></style>
