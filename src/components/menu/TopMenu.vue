<template>
  <div class="navbar">
    <div class="top-menu">
      <div class="menu-item">
        <div class="img-logo">
          <img :src="require(`/src/assets/smaply.png`)" alt="Smaply logo" height="26">
        </div>
        <div class="stats-block">
          <font-awesome-icon icon="user"/>
          <div class="numberCircle">30</div>
        </div>
        <div class="stats-block">
          <font-awesome-icon icon="bullseye"/>
          <div class="numberCircle">1</div>
        </div>
        <div class="stats-block">
          <font-awesome-icon icon="project-diagram"/>
          <div class="numberCircle">2</div>
        </div>
      </div>
      <div class="breadcrumb">
        <a href="/dashboard">DASHBOARD/ MY PROJECT/ PERSONA TESS</a>
      </div>
      <div class="right-btns">
        <DropdownOrg/>
        <div class="user-header-block">
          <font-awesome-icon icon="user"/>
          Jane Doe
        </div>
        <div class="log-out">
          <font-awesome-icon icon="power-off"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DropdownOrg from '@/components/DropdownOrg.vue';

export default {
  name: 'TopMenu',
  components: {
    DropdownOrg,
  },
};
</script>
<style scoped lang="scss">
.numberCircle {
  background-color: #3C4646;
  border-radius: 50%;
  bottom: 1px;
  color: #fff;
  display: inline-block;
  float: right;
  font: 12px Arial, sans-serif;
  height: 14px;
  margin-right: 5px;
  padding: 4px;
  position: relative;
  text-align: center;
  width: 14px;
}
.top-menu {
  display: flex;
  justify-content: space-between;
}
.breadcrumb {
  display: inline-block;
  margin: auto;

  a {
    color: white;
    text-decoration:none;
  }
}
.menu-item {
  display: inline-block;
  position: relative;

  .img-logo {
    display: inline-block;
    margin-left: 8px;
    margin-right: 5px;
    position: relative;
    top: 4px;
  }
}
.right-btns {
  display: inline-block;
  padding-right: 6px;
}
.stats-block {
  background-color: #646E6E;
  border-radius: 3px;
  bottom: 3px;
  display: inline-block;
  height: 23px;
  margin-right: 5px;
  padding-top: 3px;
  position: relative;
  width: 56px;

  svg {
    color: white;
    margin-left: 5px;
  }
}
.select-type-org {
  margin-right: 6px;
}
.log-out {
  background-color: #646E6E;
  border-radius: 3px;
  bottom: 3px;
  color: white;
  display: inline-block;
  margin-left: 5px;
  padding: 3px 6px;
  position: relative;
  &:hover {
    background-color: #2c3e50;
    cursor: pointer;
  }
  &:active {
    background-color: #646E6E;
  }
}
.user-header-block {
  background-color: #646E6E;
  border-radius: 3px;
  bottom: 5px;
  color: white;
  display: inline-block;
  height: 23px;
  padding: 3px 6px 0px 6px;
  font-size: 14px;
  position: relative;

  .svg-inline--fa {
    padding-right: 8px;
  }
  &:hover {
    background-color: #2c3e50;
    cursor: pointer;
  }
  &:active {
    background-color: #646E6E;
  }
}
</style>
