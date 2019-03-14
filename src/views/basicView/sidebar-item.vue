<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="item.groupName === $state.curGroupName">

      <!-- <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <l-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :type="item.children[0].meta.icon"></l-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link> -->
      <el-submenu :index="item.path" :key="item.path">
        <template slot="title">
          {{item.meta.title}}
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <router-link :to="item.path +'/' + child.path" :key="child.name">
            <el-menu-item :index="item.path + '/' + child.path">
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  },
  methods: {
    hasOneShowingChildren (children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return false
      }
      return false
    }
  },
  mounted () {
    // console.log('item:', this.$state.menuGroups)
    // console.log('item:', this.$state.curGroupName)
  }
}
</script>
