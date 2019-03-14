<template>
  <el-menu class="navbar" mode="horizontal">
    <!-- <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="$state.sidebar.opened"></hamburger> -->
    <first-menu></first-menu>
  </el-menu>
</template>

<script>
import FirstMenu from './first-menu'

export default {
  components: {
    FirstMenu
  },
  data () {
    return {}
  },
  methods: {
    toggleSideBar () {
    },
    logout () {
    },
    testbtnClick () {
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      display: flex;
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
