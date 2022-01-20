<template>
  <div class="data-design-field">
    <div class="data-design-field-content">
      <div class="data-design-field-name">
        {{ data.fieldName }}
      </div>
      <div class="data-design-field-filter" @click="getFieldData(data)"></div>
      <div ref="point" class="data-design-field-relation" @click.stop.prevent="setRelation"></div>
      <div class="data-design-field-divider"></div>
    </div>
  </div>
</template>

<script>

window.__isRel__ = false
window.__rel__ = null
export default {
  name: 'Field',
  props: {
    data: {
      type: Object,
      default () {
        return {
          fieldName: '',
          id: '',
        }
      },
    },
  },
  data () {
    return {
      startPath: [],
      endPath: [],
    }
  },
  methods: {
    // 设置关联关系
    setRelation () {
      let relCom = this.$parent.$parent.$children.find(rel => rel.$options.name === 'Relation')
      if (!window.__isRel__) {
        window.__isRel__ = true
        window.__rel__ = this
        relCom.start(this.data.id)
        this.$parent.$parent.$el.onmousemove = (e) => {
          relCom.move(e)
          this.$parent.$parent.$el.onclick = () => {
            this.$parent.$parent.$el.onmousemove = null
            this.$parent.$parent.$el.onclick = null
            window.__isRel__ = false
            relCom.stopSetting()
          }
        }
      } else {
        this.$parent.$parent.$el.onmousemove = null
        this.$parent.$parent.$el.onclick = null
        window.__isRel__ = false
        if (window.__rel__ === this) {
          alert('关联失败')
          return
        }
        relCom.end(this.data.id)

      }

    },
    updatePath () {
      this.startPath.forEach(path => path.insert())

      this.endPath.forEach(path => path.insert())
    },
    getFieldData (value) {
      this.$emit('getFieldData', value)
    },
  },
}
</script>

<style scoped>
.data-design-field {
  width: 100%;
  position: relative;
  padding: 0 0 5px;
}

.data-design-field-content {
  height: auto;
  color: #FFFFFF;
  padding: 5px 15px 5px 15px;
}

.data-design-field-name {
  width: 100%;
  color: #FFFFFF;
  line-height: 20px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
}

.data-design-field-filter {
  position: absolute;
  right: 35px;
  top: 11px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAJCAYAAADkZNYtAAAABHNCSVQICAgIfAhkiAAAAKJJREFUGFeVjrENwkAMRb/RFZRhAhiBDWAD2IB0OZFIeBQXFylXETYIGzACbEIJojC6SIcSiED8yrLf9/+U5dwQYYUvUuByN1hSYOyWU4ywH+QVh6qUNNxaOCgrWAjYdQ2qOPpS1nH3gtuEnGsQNmGO0bXIdRBOmZPxA2cQpjeDSRfs1YhuW/AJwKJyoVVfH4u/YQUS72T++7PlmRqwd8Lv8BPL8DNabbGAVwAAAABJRU5ErkJggg==") no-repeat;
  -moz-background-size: 100%;
  background-size: 100%;
  width: 10px;
  height: 10px;
  overflow: hidden;
  cursor: pointer;
}

.data-design-field-relation {
  position: absolute;
  right: 10px;
  top: 10px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABHNCSVQICAgIfAhkiAAAAItJREFUGFdjZICAAAYGhnwGBgYDBgYGAQYGhgMMDAyNIJoRKrkeqhCdcgQpAKm29/D0ZCguLWPg5+NnqKutZtixfTtI8UGQgv8g1qkz5xhk5eTAJly5cpnB1ckRxPxASMFHuBWeXl4MRSWlYCvq62oYtm/bBrcC5AO8joR5swDqTX6Q4xgYGBpAHgAARt8n6D4c01oAAAAASUVORK5CYII=") no-repeat;
  -moz-background-size: 100%;
  background-size: 100%;
  width: 10px;
  height: 10px;
  overflow: hidden;
  cursor: pointer;
}

.data-design-field-divider {
  border-bottom: 1px #8193a5 dashed;
  position: absolute;
  width: 85%;
  height: 1px;

}
</style>
