<template>
  <div class="action-btn">
    <font-awesome-icon :icon=icon size="lg"/>
    <span class="text-style">{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: 'ActionButton',
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: 'No text added!',
    },
  },
};
</script>
<style scoped lang="scss">
.action-btn {
  padding: 8px 20px;
  border-radius: 5px;

  svg {
    color: #646E6E;
    display: block;
    margin: 0 auto;
  }

  span {
    font-size: 12px;
  }

  &:hover {
    background-color: #eaeaea;
    box-shadow: 1px 1px #dedede;
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
  }
}
</style>
