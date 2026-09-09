<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $page, $nav } = useSlideContext()
</script>

<template>
  <div
    class="boulit-progress"
    role="progressbar"
    aria-label="Presentation progress"
    :aria-valuemin="0"
    :aria-valuemax="$nav.total"
    :aria-valuenow="$page"
    :aria-valuetext="`Slide ${$page} of ${$nav.total}`"
  >
    <div
      class="boulit-progress-fill"
      :style="{ width: `${$page / $nav.total * 100}%` }"
    />
  </div>
</template>

<style scoped>
.boulit-progress {
  position: absolute;
  z-index: 10;
  top: 1.5rem;
  right: 3.75rem;
  left: 3.75rem;
  height: 2px;
  background: var(--boulit-accent-soft);
  pointer-events: none;
}

.boulit-progress-fill {
  height: 100%;
  background: var(--boulit-accent);
}
</style>
