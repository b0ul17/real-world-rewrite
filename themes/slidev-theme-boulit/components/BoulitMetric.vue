<script setup lang="ts">
defineProps<{
  value: string | number
  label: string
}>()
</script>

<template>
  <div class="boulit-metric">
    <strong>{{ value }}</strong>
    <span>{{ label }}</span>
  </div>
</template>
