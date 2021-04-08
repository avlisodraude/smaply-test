<template>
  <div>
    <header>image gallery <font-awesome-icon class="conf-icon" icon="cog" /></header>
    <ckeditor class="image-gallery-field" v-model="editorData" :config="editorConfig" type="inline">
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
p {
  margin: 4px 0 10px 10px;
}
img {
  display:block;
  margin:auto;
  padding: 10px;
}
.image-gallery-field {
  padding: 0 10px;
  color: #999;
}
.conf-icon {
  &:hover {
    cursor: pointer;
  }
}
</style>
