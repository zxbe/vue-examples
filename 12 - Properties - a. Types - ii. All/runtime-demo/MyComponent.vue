<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk          -->

<template>
  <div>
    <h1>Hello</h1>
    <ul>
      <li>String: {{ str }}</li>
      <li>Number: {{ num }}</li>
      <li>Boolean: {{ bool }}</li>
      <li>Array: {{ arr.toString() }}</li>
      <li>Object: {{ JSON.stringify(obj) }}</li>
      <li>Date: {{ date }}</li>
      <li>Function: {{ fun.toString() }}</li>
    </ul>
  </div>
</template>

<script>
/* eslint vue/require-prop-types: "off" */
/* eslint vue/require-default-prop: "off" */

// @vue/component
module.exports = {
  name: 'MyComponent',
  props: {
    str: String,
    num: Number,
    bool: Boolean,
    arr: Array,
    obj: Object,
    date: Date,
    fun: Function
    //sym: Symbol
  }
};
</script>

<style scoped></style>
