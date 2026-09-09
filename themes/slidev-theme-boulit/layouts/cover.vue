<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  background?: string
}>()

const style = computed(() => props.background
  ? {
      backgroundImage: `linear-gradient(color-mix(in srgb, var(--boulit-surface) 88%, transparent), color-mix(in srgb, var(--boulit-surface) 96%, transparent)), url("${props.background}")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  : undefined)
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div>
      <slot />
    </div>
  </div>
</template>
