<template>
  <div class="button-container">
    <VKButton
      text
      size="xs"
      icon="tag-fill"
      @click="showTooltip = !showTooltip"
    ></VKButton>
    <div class="tooltip-content" v-show="showTooltip" v-html="propsValue"></div>
  </div>
</template>

<script lang="ts" setup>
import { VKButton } from '@versakit/ui'
import { computed, ref } from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
})

const propsValue = computed(() => {
  if (!props.value) return ''
  return props.value
    .split(',')
    .map((item) => {
      if (item == '') return `<code>''</code>`
      else return `<code>${item}</code>`
    })
    .join(' | ')
})

const showTooltip = ref(false)
</script>

<style scoped>
.ver-btn {
  margin-left: 5px;
}

.ver-btn.ver-icon {
  font-size: 10px !important;
  width: 0.1rem;
  height: 0.1rem;
}

.button-container {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  max-width: 800px;
  display: inline-block;
  white-space: nowrap;
  word-break: normal;
  overflow-x: auto;
  z-index: 10;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);

  .dark & {
    background-color: #414243;
    color: #fff;
    border-color: #333;
  }
}
</style>
