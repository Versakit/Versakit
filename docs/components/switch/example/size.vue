<template>
  <div>
    <VKSegmented v-model="selectedValue" :options="options"></VKSegmented>

    <VKSwitch :size="selectedValue" v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { VKSwitch, VKSegmented } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
const selectedValue = ref('md')

const options = [
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
</script>

<style scoped>
.ver-switch {
  margin: 0px 10px;
}
</style>
