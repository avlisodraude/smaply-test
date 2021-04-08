<template>
  <div>
    <header>Long text <font-awesome-icon class="conf-icon" icon="cog" /></header>
    <ckeditor
      class="long-text-field"
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
      type="inline" />
  </div>
</template>
<script>
export default {
  name: 'ImageField',
  data() {
    return {
      editor: 'ClassicEditor',
      editorData: '<p>Click to edit.</p>',
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
.long-text-field {
  padding: 0 10px;
  color: #999;
}
.conf-icon {
  &:hover {
    cursor: pointer;
  }
}
</style>
