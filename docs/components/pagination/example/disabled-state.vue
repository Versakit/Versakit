<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const currentPage = ref(1)
</script>

<template>
  <VKPagination v-model="currentPage" :total="100" :disabled="true" />
</template>

<style scoped></style>
