<template>
  <div class="boulit-grid" aria-hidden="true" />
</template>

<style scoped>
.boulit-grid {
  position: absolute;
  z-index: 0;
  inset: 0;
  background-image:
    linear-gradient(var(--boulit-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--boulit-grid-line) 1px, transparent 1px);
  background-size: 2.5rem 2.5rem;
  pointer-events: none;
}
</style>
