<template>
  <div class="app-firstmenu">
    <ul class="app-firstmenu__menus">
      <li class="menu__item " v-bind:class="{ active:index==current}"  v-for="(item, index) in menus"  :key="index" @click="changeMenu(index)">{{item.groupName}}</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      current: 0
    }
  },
  computed: {
    menus () {
      return this.$state.menuGroups
    }
  },
  methods: {
    changeMenu (index) {
      this.current = index
      this.$dispatch('switchMenuGroup', index)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-firstmenu {
  float: left;
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  outline: none;
}
.app-firstmenu__menus {
  .menu__item {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    color: #121212;
    text-decoration: none;
    font-family: "Microsoft YaHei UI Light";
    font-weight: bold;
    font-size: 14px;
  }
  .menu__item:hover{
    color: #6d6c6c;
  }
  .active {
    font-size: 16px;
    border-bottom: 2px solid #121212;
  }
}
</style>
