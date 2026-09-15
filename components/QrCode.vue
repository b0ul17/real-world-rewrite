<script setup lang="ts">
import { renderSVG } from 'uqr'

const props = defineProps<{
  value: string
  width?: number
  height?: number
}>()

const svg = renderSVG(props.value)
</script>

<template>
  <div
    class="qr-code"
    :style="{ width: `${width ?? 160}px`, height: `${height ?? 160}px` }"
    v-html="svg"
  />
</template>

<style scoped>
.qr-code :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
