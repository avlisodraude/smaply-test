<template>
  <div class="actions-menu">
    <div class="user-card">
      <div class="persona-name">
        <font-awesome-icon class="user-icon" icon="user" size="lg"/> Persona
        <input v-show="editable" type="text" id="fname" :value="persona.name"
               class="editName" @blur="switchEditable">
        <span v-show="!editable" class="setName">{{ persona.name }}</span>
        <font-awesome-icon v-show="!editable" @click="switchEditable"
                           class="edit-persona-name" icon="edit" size="sm"/>
        <font-awesome-icon v-show="editable"
                           @click="switchEditable" class="edit-persona-name" icon="save" size="sm"/>
      </div>
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
import axios from 'axios';

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
      editable: false,
    };
  },
  props: {
    persona: {
      type: Object,
      required: true,
    },
  },
  methods: {
    switchEditable() {
      this.editable = !this.editable;
      const editedName = document.querySelector('.editName').value;
      const setName = document.querySelector('.setName').innerHTML;

      if (editedName === setName) {
        console.log('same name, nothing to update!');
        return;
      }
      this.persona.name = editedName;
      // update data object.
      // TODO: validation needed and clean up (if needed)! save urls to config file.
      if (!this.editable) {
        axios.put('https://private-fdced4-smaplypersonastest.apiary-mock.com/personas/20', this.persona).then((r) => console.log(r.data));
      }
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

#fname {
  margin-left: 6px;
  height: 18px;
  width: 80px;
}
</style>
