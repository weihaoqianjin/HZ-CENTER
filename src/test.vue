<template>
  <div class="root1">
    <SlickList :lockToContainerEdges="true" axis="x" lockAxis="x" v-model="items" class="SortableList" @input="getChangeLists">
      <SlickItem v-for="(item, index) in items" class="SortableItem" :index="index" :key="index">
          {{ item.name }}
        <div class="root2">
          <SlickList :lockToContainerEdges="true" class="list" lockAxis="y" v-model="item.itemArr">
            <SlickItem class="list-item" v-for="(item, index) in item.itemArr" :index="index" :key="index">
              {{ item }}
            </SlickItem>
          </SlickList>
        </div>
      </SlickItem>
    </SlickList>
  </div>
</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'
export default {
  name: 'Example',
  components: {
    SlickItem,
    SlickList
  },
  data () {
    return {
      flag: true,
      items: [
        {
          name: 'title1',
          itemArr: ['Item1', 'Item2', 'Item3']
        },
        {
          name: 'title2',
          itemArr: ['Item4', 'Item5', 'Item6']
        },
        {
          name: 'title3',
          itemArr: ['Item7', 'Item8', 'Item9']
        }
      ]
    }
  },
  methods: {
    getChangeList (val) {
      console.log(val, 'val')
    },
    getChangeLists (vals) {
      console.log(vals, 'vals')
    }
  }
}
</script>
<style type="text/scss" lang="scss" scoped>
.root1 {
  width: 600px;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.root2 {
  display: flex;
  height: 100%;
}
.list {
  max-height: 80vh;
  margin: 0 auto;
  padding: 0;
  overflow: auto;
  background-color: #f3f3f3;
  border: 1px solid #efefef;
  border-radius: 3;
}
.list-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  user-select: none;
  color: #333;
  font-weight: 400;
}
.stylizedHelper {
  background: blue;
  color: #fff
}
.SortableList {
  display: flex;
  width: 600px;
  white-space: nowrap;
  max-height: 80vh;
  margin: 0 auto;
  padding: 0;
  overflow: auto;
  background-color: #f3f3f3;
  border: 1px solid #efefef;
  border-radius: 3;
}
.SortableItem {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  user-select: none;
  color: #333;
  font-weight: 400;
}
</style>