<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import BoulitProgress from './components/BoulitProgress.vue'
import BoulitDoodles from './components/BoulitDoodles.vue'
import BoulitGrid from './components/BoulitGrid.vue'

const { $frontmatter } = useSlideContext()
</script>

<template>
  <template v-if="$frontmatter.backgroundPattern !== 'none'">
    <BoulitDoodles v-if="$frontmatter.doodles === true" />
    <BoulitGrid v-else />
  </template>
  <BoulitProgress />
</template>
