<template>
  <el-form>
    prod-list 页
    <el-button @click="jump({'path': '/report/report-list'})">跳转report</el-button>
  </el-form>
</template>
<script>
export default {
  name: 'prod-list',
  data () {
    return {
      param: ''
    }
  }
}
</script>
