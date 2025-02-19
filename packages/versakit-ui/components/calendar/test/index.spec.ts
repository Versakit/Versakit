/*
 * @Author: abining/3094774079@qq.com
 * @Date: 2025-02-17 15:10:39
 * @LastEditors: abining/3094774079@qq.com
 * @Description: Calendar 单元测试
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerCalendar } from '../index'

describe('VerCalendar 组件测试', () => {
  // 辅助函数：创建固定的测试日期
  const createTestDate = () => {
    const date = new Date(2024, 1, 19) // 2024年3月15日
    return date
  }

  // 基础渲染测试
  it('测试组件是否正确渲染基础类名', () => {
    const wrapper = mount(VerCalendar)
    expect(wrapper.classes()).toContain('ver-calendar')
  })

  // Props 测试
  it('测试 modelValue 属性', () => {
    const testDate = createTestDate()
    const wrapper = mount(VerCalendar, {
      props: {
        modelValue: testDate,
      },
    })

    // 验证当前年月显示是否正确
    const title = wrapper.find('.ver-calendar-title')
    expect(title.text()).toBe('2024年2月')

    // 验证选中日期是否存在
    const selectedCell = wrapper.find('.is-selected')
    expect(selectedCell.exists()).toBe(true)
  })

  it('测试 readonly 属性', async () => {
    const wrapper = mount(VerCalendar, {
      props: {
        readonly: true,
        modelValue: createTestDate(),
      },
    })

    // 点击日期单元格
    const dateCell = wrapper.find('.ver-calendar-cell')
    await dateCell.trigger('click')

    // 验证是否没有触发更新事件
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  // 事件测试
  it('测试日期选择事件', async () => {
    const wrapper = mount(VerCalendar, {
      props: {
        modelValue: createTestDate(),
      },
    })

    // 找到一个非选中的日期单元格
    const cells = wrapper.findAll('.ver-calendar-cell')
    const nonSelectedCell = cells.find((cell) => !cell.classes('is-selected'))

    if (nonSelectedCell) {
      await nonSelectedCell.trigger('click')

      // 验证是否触发了相应事件
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('change')).toBeTruthy()
    }
  })

  // 月份切换测试
  it('测试月份切换功能', async () => {
    const wrapper = mount(VerCalendar, {
      props: {
        modelValue: createTestDate(),
      },
    })

    const vm = wrapper.vm as any
    const initialMonth = vm.currentMonth

    // 测试下一月
    await wrapper
      .find('.ver-calendar-header button:last-child')
      .trigger('click')
    expect(vm.currentMonth).toBe((initialMonth + 1) % 12)

    // 测试上一月
    await wrapper
      .find('.ver-calendar-header button:first-child')
      .trigger('click')
    expect(vm.currentMonth).toBe(initialMonth)
  })

  // 插槽测试
  it('测试自定义头部插槽', () => {
    const wrapper = mount(VerCalendar, {
      slots: {
        header: '<div class="custom-header">自定义头部</div>',
      },
    })
    expect(wrapper.find('.custom-header').exists()).toBe(true)
    expect(wrapper.find('.custom-header').text()).toBe('自定义头部')
  })

  it('测试自定义单元格插槽', () => {
    const testDate = createTestDate()
    const wrapper = mount(VerCalendar, {
      props: {
        modelValue: testDate,
      },
      slots: {
        'date-cell': `
          <template #date-cell="{ data }">
            <div class="custom-cell">自定义日期</div>
          </template>
        `,
      },
    })
    expect(wrapper.find('.custom-cell').exists()).toBe(true)
    expect(wrapper.find('.custom-cell').text()).toBe('自定义日期')
  })

  it('测试日期切换', async () => {
    const wrapper = mount(VerCalendar)
    const vm = wrapper.vm as any
    const year = vm.currentYear
    // 测试下一月
    await vm.prevYear()
    expect(vm.currentYear).toBe(year - 1)
    // 测试上一月
    await vm.nextYear()
    expect(vm.currentYear).toBe(year)
    await vm.today()
  })
})
