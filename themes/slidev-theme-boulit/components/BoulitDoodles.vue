<script setup lang="ts">
import { slideHeight, slideWidth, useSlideContext } from '@slidev/client'
import { computed } from 'vue'
import { createRandom } from '../styles/textures/random'

const { $page } = useSlideContext()

const shapes = [
  'M0-18 5-5 19-4 8 5 12 19 0 11-12 18-8 4-19-5-5-6Z',
  'M-18 12Q-12-16 16-10M6-18 18-11 12 0',
  'M-18 0Q-10-18-3 0T12 0Q16-9 19-4',
  'M-7-15-18 0-6 13M7-14 18 1 6 15M3-18-3 18',
  'M-4-19-14 3-1 2-5 20 15-6 3-4 8-19Z',
  'M-5-14C18-23 25 10 6 17S-23 4-12-9C-5-17 13-11 10 0S-7 11-5 1',
  'M-17-8 0-18 17-8 16 11 0 20-17 9ZM-17-8 0 2 17-8M0 2V20',
  'M-17 7C-25-2-15-12-8-8C-9-23 15-23 15-8C28-9 24 9 15 9L-17 7',
  'M-10-18C-21-19-9-3-18 0C-9 2-21 19-10 18M10-18C21-19 9-3 18 0C9 2 21 19 10 18',
  'M-13 17Q-5 2-12-4T-6-18M0 18Q9 2 1-5T8-18M14 15Q21 4 14-6',
  'M-15-12 15 15M-14 15 14-14M-18 1 18-1M1-18-1 18',
  'M-17-13 16-12 18 9-16 11ZM-20 15Q0 18 21 13M-7-3-2-7M-7-3-2 1M4 3 10 2',
  // Ice cream cone.
  'M-12-4C-21-7-15-15-9-15C-10-24 9-24 10-14C20-15 21-4 12-3Q8 1 4-3Q0 2-4-3Q-8 1-12-4ZM-11-1 0 21 11-1M-8 5 7 3M-5 11 4 9M-7 0 5 11M0 0 8 5',
  // Pizza slice.
  'M-18-10Q0-24 18-10L1 20ZM-15-6Q0-16 15-6M-9-2a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4 1a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M-1 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0',
  // Spiral lollipop.
  'M0-20C18-20 18 6 0 6C-18 6-18-20 0-20ZM-2 6-3 21M2 6 1 21M0-7c-4-5-9 2-4 5C7 6 12-10 1-13C-7-17-13-8-9-1',
  // Unicorn profile, with horn and mane.
  'M-12 20C-12 10-7 7-10-1C-15-8-12-17-4-18L0-11 7-13 16-2Q21 0 16 6L8 7 4 20ZM3-13 12-24 8-8M-8-14-10-22-2-17M-7-18Q-22-13-17-4L-21 2-15 4-19 10-12 12M-9-10Q-14-5-10 1M-7 1Q-12 8-11 15M8-3h.3M15 2h.3',
  // Rainbow.
  'M-20 13C-20-24 20-24 20 13M-14 13C-14-15 14-15 14 13M-8 13C-8-6 8-6 8 13M-20 13H-8M8 13H20',
  // Duck.
  'M-19 2Q-12 9-5 2C-11-9-1-18 8-13Q15-10 12-3L21 0 12 3C18 17-10 24-18 10ZM-11 7Q-4 16 4 7Q-2 6-5 9M7-7h.3M-17 21Q-3 24 11 20',
  // Paired music notes.
  'M-7 17V-15L17-20V12M-7-8 17-13M-7 13C-12 10-22 15-20 20C-17 25-7 21-7 17ZM17 8C12 5 2 10 4 15C7 20 17 16 17 12Z',
  // Photography camera.
  'M-21-11H-10L-6-17H6L10-11H21Q24-11 24-7V15Q24 18 20 18H-20Q-24 18-24 14V-7Q-24-11-21-11ZM-10 3a10 10 0 1 0 20 0a10 10 0 1 0-20 0M-6 3a6 6 0 1 0 12 0a6 6 0 1 0-12 0M-17-5H-12M14-5h4v4h-4ZM-18-11V-15H-11V-11',
  // Film strip with two frames and sprocket holes.
  'M-21-19H21V21H-21ZM-11-13H11V-1H-11ZM-11 5H11V17H-11ZM-18-15h3v3h-3ZM15-15h3v3h-3ZM-18-5h3v3h-3ZM15-5h3v3h-3ZM-18 5h3v3h-3ZM15 5h3v3h-3ZM-18 15h3v3h-3ZM15 15h3v3h-3Z',
  // Roll of photographic film with an unspooled strip.
  'M-19-15C-19-21 1-21 1-15C1-9-19-9-19-15ZM-19-15V15C-19 21 1 21 1 15V-15M-12-19V-23H-6V-19M-19-5Q-9-1 1-5M-19 8Q-9 12 1 8M1-8Q10-3 23-9V14Q12 21 1 14M6-1Q12 2 18-1V9Q12 12 6 9ZM5-5l2 1M12-4h2M19-6l2-1M5 13l2 1M12 15h2M19 13l2-1',
  // Minnie Mouse head with round ears, lashes, and a polka-dot bow.
  'M-12-8C-28-4-30-24-18-26C-9-29-3-20-6-13M6-13C3-20 9-29 18-26C30-24 28-4 12-8M-12-8C-20 8-12 23 0 22C12 23 20 8 12-8M-3-16Q0-20 3-16V-11Q0-8-3-11ZM-3-16-11-22Q-15-12-10-7L-3-11M3-16 11-22Q15-12 10-7L3-11M-9-16h.3M9-16h.3M-8 4q3-6 6 0M2 4q3-6 6 0M-8 2-10 0M8 2 10 0M-3 7Q0 3 3 7Q0 11-3 7ZM-7 12Q0 18 7 12',
  // Stitch head with oversized ears, eye patches, and a broad nose.
  'M-13-5Q-11-14-3-14L-1-19 2-15 6-18 6-13Q13-12 14-4C22 12 10 23 0 21C-10 23-22 12-13-5ZM-13-6Q-20-23-34-24Q-35-4-16 6M14-6Q20-23 34-24Q35-4 16 6M-17-4Q-23-14-28-17Q-27-5-19 0M17-4Q23-14 28-17Q27-5 19 0M-11-1C-17 1-14 11-8 10C-4 7-6 0-11-1ZM11-1C17 1 14 11 8 10C4 7 6 0 11-1ZM-10 3v3M10 3v3M-5 8Q0 4 5 8Q4 12 0 13Q-4 12-5 8ZM-9 13Q0 22 9 13M-7 15-5 18-3 17M3 17 5 18 7 15',
  // Rocking horse, with saddle and curved wooden rocker.
  'M-15 3Q-19-7-9-7L3-6 7-17 13-21 14-16 22-9Q24-6 19-4L13-6 10 4 14 20H8L4 7H-5L-9 21H-15L-12 5ZM10-20 8-26 15-21M7-17 3-18 2-12 0-9M-15-4Q-24-14-24 2Q-22 7-20 2Q-21-6-15-2M-7-7Q-4-1 3-6M15-13h.3M20-7h.3M-25 14Q0 31 25 14L24 19Q0 35-24 19Z',
  // Cowboy-hatted driver on a small tractor.
  'M7 14a8 8 0 1 0 16 0a8 8 0 1 0-16 0M12 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0M-22 17a5 5 0 1 0 10 0a5 5 0 1 0-10 0M-17 17h.3M-25 11V0Q-18-3-8 0L-4 9H7M-12 17H7M-22 2V8M-18 2V8M-13-2-14-9H-11M5 10Q15-1 25 8M10 5Q18 7 24 3M-5 8-1-4M-7-6Q-4-10 1-5Q4-1 0-2ZM3-24Q11-21 20-25M6-23 7-29Q11-31 14-28L16-24M7-22 5-18 8-17Q11-10 15-16L16-23M8-14Q15-16 18-9L20 1 13 4M8-13 3-7-3-6M10-9 5-3 0-3M13 4 3 5-3 13M19 4 7 9 1 17-7 17-8 14-3 13',
]

const doodles = computed(() => {
  // Use the slide number so previews and exports retain the same composition.
  const random = createRandom(Math.imul($page.value, 2654435761))
  const width = slideWidth.value
  const height = slideHeight.value
  const columns = Math.max(1, Math.round(width / 100))
  const rows = Math.max(1, Math.round(height / 90))
  const cellWidth = width / columns
  const cellHeight = height / rows
  const slots = Array.from({ length: columns * rows }, (_, index) => ({
    x: (index % columns + random(20, 80) / 100) * cellWidth,
    y: (Math.floor(index / columns) + random(20, 80) / 100) * cellHeight,
    size: random(26, 50),
  }))

  return slots.map(slot => ({
    path: shapes[random(0, shapes.length - 1)],
    transform: `translate(${slot.x} ${slot.y}) rotate(${random(-40, 40)}) scale(${slot.size / 40})`,
    accent: random(0, 3) === 0,
  }))
})
</script>

<template>
  <svg
    class="boulit-doodles"
    :viewBox="`0 0 ${slideWidth} ${slideHeight}`"
    aria-hidden="true"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2.2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      v-for="(doodle, index) in doodles"
      :key="index"
      :d="doodle.path"
      :transform="doodle.transform"
      :class="{ 'boulit-doodles-accent': doodle.accent }"
    />
  </svg>
</template>

<style scoped>
.boulit-doodles {
  position: absolute;
  z-index: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: color-mix(in srgb, var(--boulit-line) 70%, var(--boulit-surface));
  opacity: var(--boulit-doodle-opacity);
  pointer-events: none;
}

.boulit-doodles-accent {
  color: color-mix(in srgb, var(--boulit-accent) 12%, var(--boulit-accent-soft));
}
</style>
