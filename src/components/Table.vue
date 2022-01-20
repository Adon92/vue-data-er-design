<template>
  <div class="data-design-table" :style="{transform:`translate(${x}px,${y}px)`}">
    <div class="data-design-table-content">
      <div class="data-design-table-ico"></div>
      <div class="data-design-table-info" @click="getTableData(tableData)"></div>
      <div class="data-design-table-header"
           @mousedown="draggable"
      >
        <div class="data-design-table-name">{{ tableData.tableName }}</div>
      </div>
      <Field ref="field" v-for="field in tableData.fields" :key="field.id"
             :data="field"
             @getFieldData="getFieldData"
      ></Field>
    </div>
  </div>
</template>

<script>
import Field from './Field'

window.__row__ = 0
window.__col__ = 0
export default {
  name: 'Table',
  components: { Field },
  props: {
    tableData: {
      type: Object,
      default () {
        return {
          tableName: '',
          fields: [],
        }
      },
    },
  },
  data () {
    return {
      x: 0,
      y: 0,
    }
  },
  methods: {
    getTableData (value) {
      this.$emit('getTableData', value)
    },
    getFieldData (value) {
      this.$emit('getFieldData', value)
    },
    draggable (event) {
      let xx = event.x - this.x
      let yy = event.y - this.y
      this.$parent.$el.onmousemove = (e) => {
        this.x = e.x - xx
        this.y = e.y - yy
        if (this.x < 0) {
          this.x = 1
        }
        if (this.x + this.$el.clientWidth > this.$parent.$el.clientWidth) {
          this.x = this.$parent.$el.clientWidth - this.$el.clientWidth
        }
        if (this.y < 0) {
          this.y = 1
        }
        if (this.y + this.$el.clientHeight > this.$parent.$el.clientHeight) {
          this.y = this.$parent.$el.clientHeight - this.$el.clientHeight
        }
        this.$refs.field.forEach(f => {
          f.updatePath()
        })

      }
      this.$parent.$el.onmouseup = () => {
        this.$parent.$el.onmousemove = null
        this.$parent.$el.onmouseup = null
      }
    },
  },
  mounted () {
    if (window.__col__ < 4) {
      this.x = window.__col__ * this.$el.clientWidth + 10
      this.y = window.__row__ * this.$el.clientHeight + 10

    } else {
      window.__row__++
      window.__col__ = 0
      this.x = window.__col__ * this.$el.clientWidth + 10
      this.y = window.__row__ * this.$el.clientHeight + 10

    }
    window.__col__++


  },
}
</script>

<style scoped>
.data-design-table * {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  /*z-index: 9;*/
}

.data-design-table {
  width: 250px;
  position: absolute;
  overflow: hidden;
}

.data-design-table-content {
  height: auto;
  position: relative;
  border: 1px #505960 solid;
  border-radius: 5px;
  background: rgba(38, 51, 62, 0.5);
}

.data-design-table-ico {
  position: absolute;
  left: 8px;
  top: 8px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABHNCSVQICAgIfAhkiAAAAT5JREFUKFONkT9Lw1AUxc95DfVPmwgd/ABO3Uqj4CSOgruDRgdxEN0EJ1G7iI5ODg6K0Ea/gTi46CZoSwfByQ/QzbSiQvKuJE1qrAq+6d3zzu+ex71E35m/94oZhcNQDjQ2Liasp7SFSTH3KIXsR6cCwToJI9RF4BM4yubyO6dFtkMtAhYar7OUoEqw0J8Y1y1NtXxezl1GwGLD2wrIgUyATRDDaUhEPE11kKFWtbK13wXqbRGRZ0BVAD0D0okgERcK19DYJTlWs032gK+ucuX7PAtrw8AagOnk7Q8AEOCWAoKYSswCiGub6peEfwDOg/dC0kp1+5kg4rnj1kiUsNRsj2ofeyRWACgANzEc/l+L4EQZ2K6WzFZvcd1pdUoQfQzyPZ7SIKhWa3a+maR/A2ITnfrbZHh37aE7kJLeyye6c3sNimKpyAAAAABJRU5ErkJggg==") 100% no-repeat;
  width: 15px;
  height: 15px;
  overflow: hidden;
  cursor: move;
}

.data-design-table-info {
  position: absolute;
  right: 10px;
  top: 8px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABHNCSVQICAgIfAhkiAAAAONJREFUKFONkiFOg0EQRt+37O/LLUgwWAThx1VU9AZgUBg4AKTQA7QGVcUJanHQILAYEm4B/l9myC5NQ5uw6aovm33zJjOrwXzYEjhmm2MsNJgPRw5f7vZRY6SwJ+j9AvJXocca4HhfrsMCJNJL0M5+DTD/fo/EowIAz8AI4Z26u2jNfYZT6C4ab25KIecWaNeBfJ/8Wg3n5U3HTFHjpTkX3gCEm3MVYJptJYtJ1WBwWQDgby4tbxjyPjwZDxHOVjlwWgzGYh0QT0v1Cf/llSHwKemtugf3A4zdPKU2q7b5GXn8P+NJahGw1CN3AAAAAElFTkSuQmCC") 100% no-repeat;
  width: 15px;
  height: 15px;
  overflow: hidden;
  cursor: pointer;
}

.data-design-table-header {
  border-radius: 5px 5px 0 0;
  border-bottom: 1px #505960 solid;
  line-height: 1;
  padding: 5px 28px;
  background: #314151;
  cursor: move;
}

.data-design-table-name {
  width: 100%;
  color: #FFFFFF;
  line-height: 20px;
  text-align: left;
  vertical-align: initial;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
}
</style>