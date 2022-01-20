<template>
  <div>
    <svg id="relation-design" style="position: absolute;left: 0;top: 0; width: 100%;height: 100%;">
      <i-path ref="iPath" v-for="(p,i) in data" :key="i" :dataMap="p"></i-path>
    </svg>
  </div>

</template>

<script>
import IPath from './Path'

export default {
  name: 'Relation',
  components: { IPath },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {}
  },
  methods: {

    findField (id) {
      let tables = this.$parent.$children.filter(com => com.$options.name === 'Table')
      let field = null
      for (let i = 0; i < tables.length; i++) {
        let table = tables[i]
        // 字段 组件
        let f = table.$children.find(fields => fields.data.id === id)
        if (f) {
          field = f
          break
        }
      }
      return field
    },

    start (start) {
      this.data.push({
        start: start,
        end: start,
      })
    },
    move (event) {
      this.$refs.iPath[this.data.length - 1].move(event)
    },
    end (end) {
      this.$refs.iPath[this.data.length - 1].finish(end)
    },
    // 停止关联移动
    stopSetting () {
      this.data.splice(this.data.length - 1, 1)
    },
  },
  mounted () {
    console.log(this)
    // this.initRelation()

  },

}
</script>

<style scoped>


</style>