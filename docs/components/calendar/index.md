# Calendar 日历

<p>用于展示日期的日历组件，支持自定义内容和头部。</p>

## 基础使用

Calendar 组件支持通过 `v-model` 进行日期选择，未指定时默认显示当前月份。

<demo vue="./example/base.vue"></demo>

## 自定义单元格

通过设置 `date-cell` 插槽来自定义日历单元格中显示的内容，可以获取到当前单元格的日期信息。

<demo vue="./example/customize.vue"></demo>

## 自定义头部

使用 `header` 插槽来自定义日历头部内容，可以获取到日期切换的方法。

<demo vue="./example/header.vue"></demo>

## Calendar API

### Calendar 属性

| 属性                  | 说明     | 类型      | 默认值  |
| --------------------- | -------- | --------- | ------- |
| `model-value/v-model` | 绑定值   | `Date`    | -       |
| `readonly`            | 是否只读 | `boolean` | `false` |

### Calendar 插槽

| 插槽名      | 说明             | 作用域参数                                                                                                                    |
| ----------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `header`    | 自定义头部内容   | `{ date: Date, prevMonth: () => void, nextMonth: () => void, prevYear: () => void, nextYear: () => void, today: () => void }` |
| `date-cell` | 自定义单元格内容 | `{ data: { type: 'prev-month' \| 'current-month' \| 'next-month', isSelected: boolean, day: string, date: Date } }`           |

### Calendar 事件

| 事件名   | 说明               | 类型                    |
| -------- | ------------------ | ----------------------- |
| `change` | 选中日期变化时触发 | `(value: Date) => void` |

### Calendar 方法

| 方法名      | 说明         | 类型         |
| ----------- | ------------ | ------------ |
| `prevYear`  | 切换到上一年 | `() => void` |
| `nextYear`  | 切换到下一年 | `() => void` |
| `prevMonth` | 切换到上一月 | `() => void` |
| `nextMonth` | 切换到下一月 | `() => void` |
| `today`     | 切换到今天   | `() => void` |
