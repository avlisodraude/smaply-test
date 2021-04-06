<template>
  <div>
    <img :src="require(`../assets/${imgUrl}`)" alt="" width="54">
    <h5>{{ header }}</h5>
  </div>
</template>
<script>
export default {
  name: 'ContentNewElement',
  props: {
    header: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
  },
};
</script>
<style scoped lang="scss">
h5 {
  bottom: 8px;
  left: 0;
  margin-bottom: 0;
  position: absolute;
  right: 0;
  text-align: center;
}
img {
  display: flex;
  margin: 24px auto;
}
</style>
