<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk          -->

<template>
  <div id="app">
    <header>
      <h1>Router - Lazy Loading</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/page1">Page 1</router-link>
        <router-link to="/page2">Page 2</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>My copyright</footer>
  </div>
</template>

<script>
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
const Page1 = () => import('./components/Page1.vue');
const Page2 = () => import('./components/Page2.vue');

export default {
  name: 'App',
  router: new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/page1', component: Page1 },
      { path: '/page2', component: Page2 }
    ]
  })
};
</script>

<style></style>
