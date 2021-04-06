<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
body {
  background-color: #646E6E;
}
#app {
  color: #2c3e50;
  font-family: Source Sans Pro;
  margin: 0;
  max-width: 1280px;
  padding:0;
}
</style>
