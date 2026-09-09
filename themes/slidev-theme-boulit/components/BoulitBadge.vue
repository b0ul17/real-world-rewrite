<script setup lang="ts">
withDefaults(defineProps<{
  tone?: 'accent' | 'neutral' | 'danger'
}>(), {
  tone: 'accent',
})
</script>

<template>
  <span class="boulit-badge" :class="`boulit-badge--${tone}`">
    <slot />
  </span>
</template>

<style scoped>
.boulit-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.85rem;
  border: 1px solid var(--boulit-line);
  border-radius: 999px;
  font-family: var(--boulit-font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.35;
}

.boulit-badge--accent {
  border-color: color-mix(in srgb, var(--boulit-accent) 25%, var(--boulit-surface));
  background: var(--boulit-accent-soft);
  color: var(--boulit-accent-strong);
}

.boulit-badge--neutral {
  background: var(--boulit-panel);
  color: var(--boulit-muted);
}

.boulit-badge--danger {
  border-color: color-mix(in srgb, var(--boulit-danger) 25%, var(--boulit-surface));
  background: var(--boulit-danger-soft);
  color: var(--boulit-danger);
}
</style>
