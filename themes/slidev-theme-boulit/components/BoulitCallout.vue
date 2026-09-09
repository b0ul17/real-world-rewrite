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
