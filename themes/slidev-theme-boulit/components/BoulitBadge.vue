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
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.82rem;
}

.boulit-badge--accent {
  border-color: rgba(240, 90, 36, 0.46);
  background: var(--boulit-accent-soft);
  color: #8f3f20;
}

.boulit-badge--neutral {
  background: var(--boulit-panel);
  color: var(--boulit-muted);
}

.boulit-badge--danger {
  border-color: rgba(255, 122, 133, 0.35);
  background: rgba(255, 122, 133, 0.09);
  color: #982f39;
}
</style>
