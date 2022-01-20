<template>
  <div id="app">
    <data-design
        :config="config"
        :data="data"
        :relation="relations"
        @getTableData="getTableData"
        @getFieldData="getFieldData"
    >

    </data-design>
    <!--    <Table></Table>-->
  </div>
</template>

<script>

import DataDesign from './components/DataDesign'

export default {
  name: 'App',
  components: {
    DataDesign,
  },
  data () {
    return {
      config: {
        width: '1000px',
        height: '1000px',
      },
      relations:[
        {start:1,end:4}
      ],
      data: [
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 1 },
            { fieldName: 'temperature', id: 2 },
            { fieldName: 'time', id: 3 },
          ],
        },
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 4 },
            { fieldName: 'temperature', id: 5 },
            { fieldName: 'time', id: 6 },
          ],
        },
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 7 },
            { fieldName: 'temperature', id: 8 },
            { fieldName: 'time', id: 9 },
          ],
        },
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 10 },
            { fieldName: 'temperature', id: 11 },
            { fieldName: 'time', id: 12 },
          ],
        },
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 13 },
            { fieldName: 'temperature', id: 14 },
            { fieldName: 'time', id: 15 },
          ],
        },

        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 28 },
            { fieldName: 'temperature', id: 29 },
            { fieldName: 'time', id: 30 },
          ],
        },
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 31 },
            { fieldName: 'temperature', id: 32 },
            { fieldName: 'time', id: 33 },
          ],
        },
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 34 },
            { fieldName: 'temperature', id: 35 },
            { fieldName: 'time', id: 36 },
          ],
        },
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 37 },
            { fieldName: 'temperature', id: 38 },
            { fieldName: 'time', id: 39 },
          ],
        },
        {
          tableName: 'table1',
          fields: [
            { fieldName: 'id', id: 40 },
            { fieldName: 'temperature', id: 41 },
            { fieldName: 'time', id: 42 },
          ],
        },
        {
          tableName: 'table2',
          fields: [
            { fieldName: 'did', id: 43 },
            { fieldName: 'tem', id: 44 },
            { fieldName: 'time', id: 45 },
          ],
        },
      ],
    }
  },
  mounted () {

  },
  methods: {
    getTableData (value) {
      console.log(value)
    },
    getFieldData (value) {
      console.log(value)
    },
    getRelation (value) {
      console.log(value)
    },
    removeRelation (value) {
      console.log(value)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #1e2a33;
}
</style>
