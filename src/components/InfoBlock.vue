<template>
  <div class="info-block">
    <div class="info-icon">
      <font-awesome-icon icon="info-circle" size="lg"/>
    </div>
    <div class="info-text">
      <h5>Missing something?</h5>
      <p>Contact us to let us know which element
        types you would like to use in your personas.</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.info-block {
  background-color: #C2E7FA;
  color: #646E6E;
  display: flex;
  margin: 12px;

  .info-icon {
    color: #3AB7F7;
    font-size: 16px;
    margin: auto;
    padding: 10px;
  }
  .info-text {
    background-color: #F0F8FC;
    font-style: italic;

    h5 {
      margin: 6px 12px;
    }
    p {
      font-size: 14px;
      margin: 6px 12px;
    }
  }
}
</style>
