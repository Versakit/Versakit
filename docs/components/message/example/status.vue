<template>
  <div>
    <VKButton type="success" @click="success">success</VKButton>
    <VKButton type="warn" @click="warning">warning</VKButton>
    <VKButton type="info" @click="info">info</VKButton>
    <VKButton type="error" @click="error">error</VKButton>
  </div>
</template>

<script setup lang="ts">
import { VKButton, VKMessage } from '@versakit/ui'

const success = () => {
  VKMessage({
    type: 'success',
    content: '这是一条消息',
    icon: 'ep:success-filled',
  })
}
const warning = () => {
  VKMessage({
    type: 'warn',
    content: '这是一条消息',
    icon: 'ep:warning-filled',
  })
}

const info = () => {
  VKMessage({
    type: 'info',
    content: '这是一条消息',
    icon: 'ep:info-filled',
  })
}

const error = () => {
  VKMessage({
    type: 'error',
    content: '这是一条消息',
    icon: 'ep:circle-close-filled',
  })
}
</script>

<style scoped>
.vk-btn {
  margin: 0px 10px;
}
</style>
