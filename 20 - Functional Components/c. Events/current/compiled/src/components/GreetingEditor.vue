<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div>
    <EditBox :value="name" @change="changed" />
    <Greeting :name="name" />
  </div>
</template>

<script>
import EditBox from './EditBoxFC.vue';
import Greeting from './GreetingFC.vue';

export default {
  name: 'GreetingEditor',
  components: {
    EditBox,
    Greeting
  },
  data: () => ({
    name: 'World'
  }),
  methods: {
    changed: function(e) {
      this.name = e.target.value;
    }
  }
};
</script>

<style scoped></style>
