<template>
  <div :class="VerClass">
    <input
      :disabled="disabled"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="input"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { InputProps } from '../type/index'

defineOptions({ name: 'VerInput' })

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  modelValue: '',
  type: 'text',
  disabled: false,
})

const input = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const VerClass = computed(() => {
  return ['ver-input', props.disabled == false ? '' : 'is-disabled']
})
</script>

<style>
@import '../style/index.css';
</style>
