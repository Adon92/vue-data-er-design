## 基于zRender的前端数据库表ER图 VUE 插件

### Use the Component

```vue
<template>
  <div>
    <data-design
        :config="config"
        :data="data"
        @tableInfo="getTableInfo"
        @fieldRule="setFieldRule"
        @filedRelation="setFieldRelation"
        @removeRelation="removeRelation"
    >

    </data-design>
  </div>
</template>

<script>
import DataDesign from 'data-design'

export default {
  name: 'HelloWorld',
  components: { DataDesign },
  data () {
    return {
      config: {
        width: 1800,
        height: 1000,
      },
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
          tableName: 'table2',
          fields: [
            { fieldName: 'did', id: 1 },
            { fieldName: 'tem', id: 2 },
            { fieldName: 'time', id: 3 },
          ],
        },
      ],
    }
  },
  methods: {
    getTableInfo (value) {
      console.log(value)
    },
    setFieldRule (value) {
      console.log(value)
    },
    setFieldRelation (value) {
      console.log(value)
    },
    removeRelation (value) {
      console.log(value)
    }
  },
}
</script>
```

### Prop

#### config:

##### width

Type: `Number`<br>
Required: `false`<br>
Default: `1000`<br>

canvas宽度<br>

```vue
<data-design :config="{width:1000}"></data-design>
```

##### height

Type: `Number`<br>
Required: `false`<br>
Default: `1000`<br>

canvas高度度<br>

```vue
<data-design :config="{height:1000}"></data-design>
```

#### data:

##### tableName

Type: `String`<br>
Required: `true`<br>
Default: ``<br>

表名

##### fields

Type: `Array`<br>
Required: `true`<br>
Default: ``<br>

字段

##### fields.id

Type: `String`<br>
Required: `true`<br>
Default: ``<br>

字段id

##### fields.fieldName

Type: `String`<br>
Required: `true`<br>
Default: ``<br>

字段名

```vue
<data-design :data="data"></data-design>
<script>
export default {
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
      tableName: 'table2',
      fields: [
        { fieldName: 'did', id: 1 },
        { fieldName: 'tem', id: 2 },
        { fieldName: 'time', id: 3 },
      ],
    },
  ]

</script>
```

### Events

#### tableInfo

Required: `false`<br>
Parameters: `value`<br>
return: `tableInfo`

点击表头部获取表信息

```vue
<data-design @tableInfo="getTableInfo"></data-design>
```

#### fieldRule

Required: `false`<br>
Parameters: `value`<br>
return: `fieldRule`

点击字段过滤图表返回字段过滤信息

```vue
<data-design @fieldRule="getTableInfo"></data-design>
```

#### filedRelation

Required: `false`<br>
Parameters: `value`<br>
return: `[fieldRelation]`

点击字段关联图标设置字段之间的关联关系

```vue
<data-design @filedRelation="getTableInfo"></data-design>
```

#### removeRelation

Required: `false`<br>
Parameters: `value`<br>
return: `[fieldRelation]`

删除关联线返回当前的最新的字段关联关系

```vue
<data-design @removeRelation="getTableInfo"></data-design>
```
