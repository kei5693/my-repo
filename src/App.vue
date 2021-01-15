<template>
  <div id="app">
    <ProgressBar v-bind:open="isPageLoad" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/NumberBaseball">NumberBaseball</router-link> |
      <router-link to="/ResponseCheck">ResponseCheck</router-link> |
      <router-link to="/MakeTable">MakeTable</router-link> |
      <router-link to="/RockScissorsPaper">RockScissorsPaper</router-link> |
      <router-link to="/LottoGenerator">LottoGenerator</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  data() {
    return {
      isPageLoad: false,
    };
  },
  components: {
    ProgressBar,
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.isPageLoad = false;
        setTimeout(() => (this.isPageLoad = true), 10);
      }
    },
  },
  mounted() {
    this.isPageLoad = true;
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  position: relative;
  padding-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
