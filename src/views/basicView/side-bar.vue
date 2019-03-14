<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :default-active="$route.path"
      :show-timeout="200"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
// import { mapGetters } from 'vuex'
import SidebarItem from './sidebar-item'
export default {
  name: 'sidebar',
  components: { SidebarItem },
  computed: {
    routes () {
      return this.$router.options.routes
    },
    isCollapse () {
      return false
    }
  }
}
</script>
