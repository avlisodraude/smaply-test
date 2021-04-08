<template>
  <div class="actions-menu">
    <div class="user-card">
      <div class="persona-card">
        <font-awesome-icon icon="user" size="lg"/>
        <span class="persona-name">Persona {{ persona.name }}</span>
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
  props: {
    persona: {
      type: Object,
      required: true,
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
</style>
