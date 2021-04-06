<template>
  <div class="add-elem">
    <div class="header-add-elements">
      <header>ADD ELEMENT </header><font-awesome-icon icon="times" @click="hidePersonaOpts" />
    </div>
    <header>Add element to persona</header>
    <div class="add-element-intructions">
      <p>Click or drag & drop one of the element types below to add it to the persona.</p>
      <p>Click on the <font-awesome-icon icon="cog" />
        icon of each element to edit its settings.</p>
      <p>You can reorder the elements by dragging them.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddElementHeader',
  methods: {
    hidePersonaOpts() {
      // hide add persona block.
      // add transition, and keep btn to open again.
      // action should 'emit' to parent/calling component.
      console.log('clicking btn...');
    },
  },
};
</script>
<style scoped lang="scss">
.header-add-elements {
  align-items: center;
  background-color: #dcdcdc;
  display: flex;
  height: 36px;
  justify-content: space-between;

  header {
    color: #646E6E;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.8px;
    padding-left: 12px;
  }
  svg {
    border-left: 1px solid #f0f0f0;
    color: #646E6E;
    padding: 10px 12px;

    &:hover {
      background-color: #eaeaea;
      box-shadow: 1px 1px #dedede;
      cursor: pointer;
    }
    &:active {
      background-color: transparent;
    }
  }
}
header {
  color: #3C4646;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 31px;
  padding: 22px 12px;
}
.add-element-intructions {
  background-color: #F0F8FC;
  color: #646E6E;
  padding: 12px;

  p {
    font-size: 14px;
    font-style: italic;
  }
}
</style>
