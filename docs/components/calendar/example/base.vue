<script lang="ts" setup>
import { VerCalendar } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(new Date())
</script>

<template>
  <VerCalendar v-model="value" />
</template>
