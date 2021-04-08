<template>
  <div class="actions-menu">
    <div class="user-card">
      <div class="persona-name">
        <font-awesome-icon class="user-icon" icon="user" size="lg"/> Persona
        <ckeditor
          v-model="editorData"
          class="editor-text"
          :config="editorConfig"
          type="inline">
        </ckeditor>
        <font-awesome-icon class="edit-persona-name" icon="edit" size="sm" /></div>
    </div>
    <div class="actions-btns">
      <ActionButton text="Save persona" icon="save"/>
      <ActionButton text="Add element" icon="plus-square"/>
      <ActionButton text="Export" icon="share"/>
      <ActionButton text="Duplicate" icon="copy"/>
      <ActionButton text="Move" icon="long-arrow-alt-right"/>
      <ActionButton text="Help" icon="question-circle"/>
      <ActionButton text="More actions" icon="ellipsis-h"/>
    </div>
  </div>
</template>
<script>
import ActionButton from '@/components/ActionButton.vue';

export default {
  name: 'ActionsMenu',
  components: {
    ActionButton,
  },
  data() {
    return {
      editorData: this.persona.name,
      editorConfig: {
        toolbar: [
          ['Cut', 'Copy', 'Paste', 'PasteText'],
        ],
      },
    };
  },
  props: {
    persona: {
      type: Object,
      required: true,
    },
  },
  watch: {
    persona() {
      console.log('test');
    },
  },
};
</script>
<style scoped lang="scss">
.actions-menu {
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;

  div {
    display: inline-block;
  }
}
.user-card {
  .persona-name {
    color: #999;
    padding: 0 10px;
  }
  .edit-persona-name {
    padding: 1px 4px;

    &:hover {
      background-color: #eaeaea;
      box-shadow: 1px 1px #dedede;
      cursor: pointer;
    }

    &:active {
      background-color: transparent;
    }
  }
  svg {
    color: #646E6E;
  }
}
.user-icon {
  margin-right: 10px;
}
.editor-text {
  color: #000;
  padding: 0 5px;
}
.cke_editable {
  padding: 0 20px;
  margin: 0 20px;
}
</style>
