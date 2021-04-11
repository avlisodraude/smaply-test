<template>
  <div id="app">
    <SmaplyPersona :add-element="FieldTypes" :layout="APISelectedFields"/>
  </div>
</template>

<script>
import FieldTypes from './staticContent/block-types.json';
import APISelectedFields from './staticContent/apiBlocks.json';
import SmaplyPersona from './components/SmaplyPersona.vue';

export default {
  name: 'App',
  components: {
    SmaplyPersona,
  },
  data() {
    return {
      FieldTypes,
      APISelectedFields,
    };
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
body {
  background-color: #646E6E;
}
#app {
  color: #2c3e50;
  font-family: Source Sans Pro;
  margin: 0 auto;
  max-width: 1280px;
  padding:0;
}
</style>
