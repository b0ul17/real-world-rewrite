<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  background?: string
}>()

const style = computed(() => props.background
  ? {
      backgroundImage: `linear-gradient(#f2f6f7aa, #f2f6f7e6), url("${props.background}")`,
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
