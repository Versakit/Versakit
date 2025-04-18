import { render, h, shallowReactive } from 'vue'
import VKNotification from './index.vue'
import type { NotifivationProps } from '../type'

// 使用shallowReactive优化性能，减少不必要的深度响应
const instances = shallowReactive<
  Array<{
    id: string
    vm: any
    vnode: any
  }>
>([])
let seed = 1

export const Notification = ({
  type,
  title,
  content,
  plain,
  position,
  icon,
  duration = 3000,
}: NotifivationProps) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  const onDestroy = () => {
    const idx = instances.findIndex((instance: any) => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, container)
  }

  const newProps = {
    type,
    title,
    plain,
    content,
    position,
    duration,
    icon,
    destroy: onDestroy,
    id,
  }

  const vnode = h(VKNotification, newProps)

  render(vnode, container)

  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
  }
  instances.push(instance)

  return instance
}

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  if (idx <= 0) {
    return 0
  } else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value + 70
  }
}
