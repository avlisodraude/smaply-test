<template>
  <div>
    <header>Image <font-awesome-icon icon="cog" /></header>
    <!--    <img :src="require(`../assets/${imgUrl}`)" alt="" width="54">-->
    <!--    <img :src="require(`../../assets/face-front.jpg`)" alt="" width="180">-->
  </div>
</template>
<script>
export default {
  name: 'ImageField',
  mounted() {
    // console.log('IMAGE FIELD');
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
img {
  display:block;
  margin:auto;
  padding: 10px;
}
</style>
