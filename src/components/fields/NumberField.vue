<template>
  <div>
    <header>Number <font-awesome-icon icon="cog" /></header>
    <p v-show="!inputField" v-on:click="editNumber">Type your number</p>
    <input v-show="inputField" type="number" v-model="number">
  </div>
</template>
<script>
export default {
  name: 'NumberField',
  data() {
    return {
      inputField: false,
      number: null,
    };
  },
  methods: {
    editNumber() {
      console.log('edit');
      this.inputField = !this.inputField;
    },
  },
};
</script>
<style scoped lang="scss">
header {
  color: #999;
  font-size: 14px;
  padding: 8px 10px;
  text-transform: uppercase;

  svg {
    float: right;
  }
}
p {
  margin: 4px 0 10px 10px;
}
img {
  display:block;
  margin:auto;
  padding: 10px;
}
input[type="number"] {
  border: 1px solid blue;
  border-radius: 5px;
  padding: 8px;
  margin: 0px 10px;
}
</style>
