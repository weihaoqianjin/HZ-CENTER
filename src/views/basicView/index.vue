<template>
 <div id="app">
    <div class="app-wrapper">
      <side-bar class="sidebar-container"></side-bar>
      <div class="main-container">
        <navbar></navbar>
        <main-area></main-area>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from './side-bar'
import MainArea from './main-area'
import Navbar from './Navbar'
export default {
  name: 'basicView',
  components: {
    SideBar,
    MainArea,
    Navbar
  }
}
</script>
