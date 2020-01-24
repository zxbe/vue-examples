<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template functional>
  <h1 :visible="props.name">Hello {{ props.name }}!</h1>
</template>

<script>
export default {
  name: 'Greeting',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
