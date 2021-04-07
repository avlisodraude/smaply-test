<template>
  <div>
    <header>Short text <font-awesome-icon icon="cog" /></header>
    <ckeditor v-model="editorData" :config="editorConfig" type="inline"></ckeditor>
  </div>
</template>
<script>
export default {
  name: 'ShortTextField',
  data() {
    return {
      editorData: '<p>Default content. Click to edit.</p>',
      editorConfig: {
        toolbar: [
          ['Source'],
          ['Format', 'Font', 'FontSize'],
          ['Bold', 'Italic'],
          ['Undo', 'Redo'],
          {
            name: 'links',
            items: ['Link', 'Unlink', 'Anchor'],
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
  color: #999;
}
img {
  display:block;
  margin:auto;
  padding: 10px;
}
</style>
