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

<style scoped>
.boulit-metric {
  display: inline-flex;
  min-width: 13rem;
  flex-direction: column;
  padding: 1.5rem 2rem;
  border: 1px solid var(--boulit-line);
  border-radius: 1rem;
  background: var(--boulit-panel);
}

.boulit-metric strong {
  font-size: 4.5rem;
  line-height: 1;
  letter-spacing: -0.07em;
}

.boulit-metric span {
  margin-top: 0.55rem;
  color: var(--boulit-muted);
  font-size: 1rem;
}
</style>
