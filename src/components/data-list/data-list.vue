<template>
  <div style="height:300px;overflow: scroll" ref="sc">
    <el-input v-model="title" />
    <el-table :data="dataList">
      <el-table-column label="名称" prop="name"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'data-list',
  data () {
    return {
      title: '',
      dataList: [{name: 'code'}],
      scrollTop: 0
    }
  },
  deactivated () {
    this.scrollTop = this.$refs.sc.scrollTop
    console.log('deactivated:', this.scrollTop)
  },
  activated () {
    console.log('actived:', this.scrollTop)
    this.$refs.sc.scrollTop = this.scrollTop
  },
  methods: {},
  mounted () {
    this.dataList = Array(10).fill({name: 'code'})
    console.log('data-list')
  }
}
</script>
