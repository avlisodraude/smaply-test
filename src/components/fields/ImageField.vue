<template>
  <div>
    <header>Image <font-awesome-icon class="conf-icon" icon="cog" /></header>
    <!--    <img :src="require(`../assets/${imgUrl}`)" alt="" width="54">-->
    <!--    <img :src="require(`../../assets/face-front.jpg`)" alt="" width="180">-->
    <ckeditor class="image-field" v-model="editorData" :config="editorConfig" type="inline">
    </ckeditor>
  </div>
</template>
<script>
export default {
  name: 'ImageField',
  data() {
    return {
      editorData: '<p>Add image.</p>',
      editorConfig: {
        toolbar: [
          ['Bold', 'Italic'],
          {
            name: 'links',
            items: ['Link', 'Unlink', 'Image'],
          },
        ],
      },
    };
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
.image-field {
  padding: 0 10px;
  color: #999;
}
.conf-icon {
  &:hover {
    cursor: pointer;
  }
}
</style>
