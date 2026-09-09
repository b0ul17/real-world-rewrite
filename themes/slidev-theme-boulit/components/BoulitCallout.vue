<script setup lang="ts">
withDefaults(defineProps<{
  tone?: 'accent' | 'danger'
}>(), {
  tone: 'accent',
})
</script>

<template>
  <div class="boulit-callout" :class="`boulit-callout--${tone}`">
    <slot />
  </div>
</template>

<style scoped>
.boulit-callout {
  padding: 1.1rem 1.35rem;
  border-left: 0.25rem solid;
  border-radius: 0 0.55rem 0.55rem 0;
  font-size: 1.2rem;
  font-weight: 650;
}

.boulit-callout--accent {
  border-color: var(--boulit-accent);
  background: linear-gradient(90deg, var(--boulit-accent-soft), transparent);
}

.boulit-callout--danger {
  border-color: var(--boulit-danger);
  background: linear-gradient(90deg, rgba(255, 122, 133, 0.1), transparent);
}
</style>
