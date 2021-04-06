<template>
  <div class="select-type-org">
    <div class="select-sim" id="select-color">
      <div class="options">
        <div class="option">
          <input type="radio" name="color" value="" id="color-" checked />
          <label for="color-">
            <font-awesome-icon icon="sitemap" /> My organization
          </label>
        </div>
        <div class="option">
          <input type="radio" name="color" value="red" id="color-red" />
          <label for="color-red">
            <font-awesome-icon icon="edit" /> Red
          </label>
        </div>
        <div class="option">
          <input type="radio" name="color" value="green" id="color-green" />
          <label for="color-green">
            <font-awesome-icon icon="bullseye" /> Green
          </label>
        </div>
        <div class="option">
          <input type="radio" name="color" value="blue" id="color-blue" />
          <label for="color-blue">
            <font-awesome-icon icon="user" /> Blue
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.select-type-org {
  display: inline-block;
  position: relative;
  top: 4px;
  .select-sim {
    width:150px;
    font-size: 14px;
    height:26px;
    line-height:26px;
    vertical-align:middle;
    position:relative;
    background:#646e6e;
    overflow:hidden;
    border-radius:3px
  }

  .select-sim::after {
    color: #DCDCDC;
    content:"▼";
    font-size: 11px;
    font-family:arial;
    position:absolute;
    top:50%;
    right:5px;
    transform:translate(0, -50%);
  }
  .select-sim:hover::after {
    content:"";
  }

  .select-sim:hover {
    overflow:visible;
  }

  .select-sim:hover .options .option label {
    display:inline-block;
    padding-left: 4px;
  }

  .select-sim:hover .options {
    background:white;
    border:1px solid #ccc;
    position:absolute;
    top:-1px;
    left:-1px;
    width:100%;
    height:88px;
    overflow-y:scroll;
  }

  .select-sim .options .option {
    overflow:hidden;
  }

  .select-sim:hover .options .option {
    height:26px;
    overflow:hidden;
  }

  .select-sim .options .option img {
    vertical-align:middle;
  }

  .select-sim .options .option label {
    display:none;
  }

  .select-sim .options .option input {
    width:0;
    height:0;
    overflow:hidden;
    margin:0;
    padding:0;
    float:left;
    display:inline-block;
    /* fix specific for Firefox */
    position: absolute;
    left: -10000px;
  }

  .select-sim .options .option input:checked + label {
    display:block;
    width:100%;
    padding-left: 4px;
    color:white;
  }
  .select-sim:hover .options .option input + label {
    display:block;
    color:black;
  }

  .select-sim:hover .options .option input:checked + label {
    background:#fffff0;
  }
  .svg-inline--fa {
    padding-right: 8px;
  }
}
</style>
