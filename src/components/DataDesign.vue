<template>
  <div class="data-design" :style="config" @contextmenu.stop.prevent="">
    <Relation :data="relation"></Relation>
    <Table v-for="(table,index) in data" :key="index"
           :table-data="table"
           @getTableData="getTableData"
           @getFieldData="getFieldData"
    ></Table>
  </div>
</template>

<script>

import Table from './Table'

const Relation = () => import('./Relation')
export default {
  name: 'DataDesign',
  components: { Table, Relation },
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          width: { type: String, default: () => '100%' },
          height: { type: String, default: () => '100%' },
        }
      },
    },
    data: {
      type: Array,
      default: () => [],
    },
    relation: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      config_: {
        width: '100%',
        height: '100%',
      },
    }
  },
  mounted () {

  },
  watch:{
    data:function(){
      window.__row__ = 0
      window.__col__ = 0
    }
  },
  methods: {

    /**
     * 获取表信息
     * @param value
     * @returns {*}
     */
    getTableData (value) {
      this.$emit('getTableData', value)
    },
    /**
     * 设置字段数据规则
     * @param value
     */
    getFieldData (value) {
      this.$emit('getFieldData', value)
    },

  },

}
</script>

<style scoped>
.data-design {

}
</style>