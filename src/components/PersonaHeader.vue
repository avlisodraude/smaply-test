<template>
  <header>
    <img :src="require(`../assets/avatar-persona.png`)" height="56" alt="">
    <div class="persona-name">
      <h5>persona name</h5>
      <p>{{ persona.name }}</p>
    </div>
    <div class="persona-shortname">
      <h5>short name</h5>
      <p>{{ persona.initials }}</p>
    </div>
  </header>
</template>
<script>
export default {
  name: 'PersonaHeader',
  props: {
    persona: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.persona);
  },
};
</script>
<style scoped lang="scss">
header {
  background-color: #DCDCDC;
  display: flex;
  height: 88px;
  justify-content: space-between;

  img {
    margin: auto 0 auto 10px;
  }
  .persona-name {
    background-color: white;
    color: #999;
    height: 56px;
    margin: auto 0;
    padding: 0 10px;
    width: 62%;
  }
  h5, p {
    margin: 3px;
  }
  h5 {
    text-transform: uppercase;
  }
  .persona-shortname {
    background-color: white;
    color: #999;
    height: 56px;
    margin: auto 0;
    margin-right: 10px;
    width: 20%;
    p {
      text-transform: uppercase;
    }
  }
}
</style>
