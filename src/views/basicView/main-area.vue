<template>
  <transition name="fade" class="main">
    <keep-alive :include="cachedViews">
      <router-view/>
    </keep-alive>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'main-area',
  computed: {
    cachedViews () {
      return this.$state.cachedViews
    },
    ...mapGetters(['curGroupName'])
  }
}
</script>
