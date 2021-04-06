<template>
  <div id="app">
    <SmaplyPersona />
  </div>
</template>

<script>
import SmaplyPersona from './components/SmaplyPersona.vue';

export default {
  name: 'App',
  components: {
    SmaplyPersona,
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
