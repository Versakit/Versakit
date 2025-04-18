<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, computed } from 'vue'
import type { CarouselItemProps } from '../type/item.ts'

defineOptions({ name: 'VKCarouselItem' })

const props = withDefaults(defineProps<CarouselItemProps>(), {
  alt: '',
  caption: '',
  fit: 'cover',
  width: '100%',
  height: '100%',
})

const uid = ref(Math.random())
const carousel = inject('carousel') as any

const isActive = computed(() => {
  const index = carousel.currentIndex.value
  const items = carousel.items.value
  return items.findIndex((item: any) => item.uid === uid.value) === index
})

const position = computed(() => {
  const index = carousel.items.value.findIndex(
    (item: any) => item.uid === uid.value,
  )
  const currentIndex = carousel.currentIndex.value
  const totalItems = carousel.items.value.length

  if (carousel.type === 'card') {
    if (index === currentIndex) return 'active'
    if (index === (currentIndex - 1 + totalItems) % totalItems) return 'prev'
    if (index === (currentIndex + 1) % totalItems) return 'next'
    return 'hidden'
  }

  return ''
})

const style = computed(() => {
  const index = carousel.items.value.findIndex(
    (item: any) => item.uid === uid.value,
  )
  const currentIndex = carousel.currentIndex.value
  const isHorizontal = carousel.direction === 'horizontal'
  const offset = (index - currentIndex) * 100

  if (carousel.type === 'card') {
    return {
      width: props.width,
      height: props.height,
    }
  }

  return {
    transform: isHorizontal
      ? `translateX(${offset}%)`
      : `translateY(${offset}%)`,
    transition: 'transform 0.5s ease-in-out',
    width: props.width,
    height: props.height,
  }
})

const ariaLabel = ref('')

onMounted(() => {
  const index = carousel.items.value.findIndex(
    (item: any) => item.uid === uid.value,
  )
  ariaLabel.value = `Slide ${index + 1} of ${carousel.items.value.length}`
  carousel.registerItem({ uid: uid.value })
})

onUnmounted(() => {
  carousel.unregisterItem(uid.value)
})
</script>

<template>
  <div
    class="carousel-item"
    :class="[position, { active: isActive }]"
    :style="style"
    role="group"
    aria-roledescription="slide"
    :aria-label="ariaLabel"
  >
    <template v-if="src">
      <div class="carousel-slide">
        <img :src="src" :alt="alt" :style="{ objectFit: fit }" />
        <div v-if="caption" class="carousel-caption">{{ caption }}</div>
      </div>
    </template>
    <slot v-else></slot>
  </div>
</template>

<style src="../style/item.css" scoped></style>
