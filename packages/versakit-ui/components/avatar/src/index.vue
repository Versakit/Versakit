<template>
  <span
    :class="VerClass"
    :style="{
      width: size,
      height: size,
    }"
  >
    <img
      :class="imgClass"
      v-if="imgURL"
      :src="src"
      alt=""
      @error="handleImgError"
    />
    <span class="ver-avatar-inline" v-else>
      <slot></slot>
    </span>
    <!-- 错误处理 -->
    <slot class="ver-avatar-inline" name="error"></slot>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { Fit } from '../type/index'
import type { AvatarProps } from '../type/index'

defineOptions({ name: 'VerAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  src: '',
  size: 50,
  shape: 'circle',
  fit: 'cover' as Fit.cover,
  fallback: '',
})

let imgURL = props.src
const handleImgError = (event: Event) => {
  const imgTarget = event.target as HTMLImageElement
  return (imgTarget.src = props.fallback)
}

const size = computed(() => {
  if (typeof props.size === 'number') {
    return props.size + 'px'
  }
  if (typeof props.size === 'string') {
    switch (props.size) {
      case 'xs':
        return '25px'
      case 'sm':
        return '32px'
      case 'lg':
        return '42px'
      default:
        return '50px'
    }
  } else return 50
})

const VerClass = computed(() => {
  const classes = [
    'ver-avatar',
    props.shape == 'circle' ? 'is-circle' : 'is-square',
  ]
  return classes
})

const imgClass = computed(() => {
  return [`fit-${props.fit}`]
})
</script>

<style>
@import '../style/index.css';
</style>
