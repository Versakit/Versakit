export interface CalendarProps {
  modelValue?: Date // 选中的日期
  readonly?: boolean // 是否只读
}

export interface CalendarEmits {
  (e: 'update:modelValue', value: Date): void
  (e: 'change', value: Date): void
}

export type DateCell = {
  text: number // 显示的日期
  type: 'prev' | 'current' | 'next' // 上月/当月/下月
  date: Date // 完整日期对象
}

// 添加单元格插槽的数据类型
export interface DateCellData {
  type: 'prev-month' | 'current-month' | 'next-month'
  isSelected: boolean
  day: string // YYYY-MM-DD 格式
  date: Date
}

// 添加头部插槽的类型
export interface CalendarHeader {
  date: Date
  prevMonth: () => void
  nextMonth: () => void
  prevYear: () => void
  nextYear: () => void
  today: () => void
}
