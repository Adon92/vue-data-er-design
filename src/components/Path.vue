<template>
  <path fill="none" stroke="#707070" stroke-width="2" :d="`M${p.m.x} ${p.m.y} Q${p.q.x} ${p.q.y} ${p.e.x} ${p.e.y}`"
  ></path>
</template>

<script>
export default {
  name: 'i-path',
  props: {
    dataMap: Object,
  },
  data () {
    return {
      start_: '',
      end_: '',
      data: {
        start: {},
        end: {},
        t: {},
      },
      p: {
        m: { x: 0, y: 0 },
        q: { x: 0, y: 0 },
        e: { x: 0, y: 0 },
      },
    }
  },
  mounted () {
    // this.start_ = this.dataMap.start
    // this.end_ = this.end
    this.init()

  },
  methods: {
    init () {
      let start = this.$parent.findField(this.dataMap.start)
      let end = this.$parent.findField(this.dataMap.end)
      if (start && end) {
        this.data.start = start
        this.data.end = end
        this.data.start.startPath.push(this) // 开始字段绑定关联线
        this.data.end.endPath.push(this)   // 结束字段绑定关联线
        this.insert()
      }
      if (start && !end) {
        this.data.start = start
        this.data.end = start
        this.insert()
      }
    },
    move (event) {
      let s = {
        x: this.data.start.$refs.point.getBoundingClientRect().x - 460,
        y: this.data.start.$refs.point.getBoundingClientRect().y - 286,
      }
      let e = {
        x: event.x - 460,
        y: event.y - 286,
      }
      this.p = {
        m: { x: s.x, y: s.y },
        q: { x: Math.abs(s.x + e.x - s.x + 400), y: Math.abs(s.y + (e.y - s.y) / 2) },
        e: { x: e.x, y: e.y },
      }
    },
    finish (endId) {
      this.dataMap.end = endId
      this.data.end = this.$parent.findField(endId)
      this.data.start.startPath.push(this) // 开始字段绑定关联线
      this.data.end.endPath.push(this)   // 结束字段绑定关联线
    },
    insert () {
      let s = {
        x: this.data.start.$refs.point.getBoundingClientRect().x - 460,
        y: this.data.start.$refs.point.getBoundingClientRect().y - 286,
      }
      let e = {
        x: this.data.end.$refs.point.getBoundingClientRect().x - 460,
        y: this.data.end.$refs.point.getBoundingClientRect().y - 286,
      }
      this.p = {
        m: { x: s.x, y: s.y },
        q: { x: Math.abs(s.x + e.x - s.x + 400), y: Math.abs(s.y + (e.y - s.y) / 2) },
        e: { x: e.x, y: e.y },
      }
    },
  }
  ,
}
</script>

<style scoped>

</style>